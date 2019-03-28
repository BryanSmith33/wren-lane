import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import FeaturedPost from '../components/Home/FeaturedPost'
import OldPosts from '../components/Home/OldPosts'
import Layout from '../components/layout'

class BlogIndex extends Component {
  render() {
    const {
      title: siteTitle,
      description: siteDescription,
    } = this.props.data.site.siteMetadata
    const featuredPost = this.props.data.featured.edges[0]
    const oldPosts = this.props.data.old.edges
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <FeaturedPost postInfo={featuredPost} />
        <OldPosts postInfo={oldPosts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    featured: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 580)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            heroImage {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    old: allMarkdownRemark(
      skip: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            heroImage {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
