import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const About = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: `Something About us` }]}
      title={`Wren Lane | About Us`}
    />
    <div>About page</div>
  </Layout>
)

export default About
