import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Contact = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: `Something about us` }]}
      title={`Wren Lane | Contact Us`}
    />
    <div>Contact page</div>
  </Layout>
)

export default Contact
