import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Contact = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: `Home renovation, health, fashion and family blog`,
        },
        {
          name: 'keywords',
          content: `Home renovation, Health and Fitness, Family, Blog, Fashion`,
        },
      ]}
      title={`Wren Lane | Thanks for the email!`}
    />
    <h1>Success</h1>
  </Layout>
)

export default Contact