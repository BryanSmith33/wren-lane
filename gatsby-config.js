require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Wren Lane',
    author: 'Bryan and Lindsey Smith',
    description: 'Home renovation, health, fashion and family blog',
    siteUrl: 'https://wrenlane.com',
  },
  pathPrefix: '/wren-lane',
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wren Lane`,
        short_name: `Wren Lane`,
        start_url: `/`,
        background_color: `#fffefc`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `content/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `wren.lane`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMPAPI,
      },
    },
  ],
}
