import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Search = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: `Something about us` }]}
      title={`Wren Lane | Search`}
    />
    <div>Search page</div>
  </Layout>
)

export default Search
