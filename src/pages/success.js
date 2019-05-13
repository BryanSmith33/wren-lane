import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const SuccessContainer = styled.div`
  text-align: center;
`

const Contact = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: `Home renovation, health, fashion and family blog`
        },
        {
          name: 'keywords',
          content: `Home renovation, Health and Fitness, Family, Blog, Fashion`
        }
      ]}
      title={`Wren Lane | Thank you!`}
    />
    <SuccessContainer>
      <h1>Thanks for the message!</h1>
      <p>We will get back to you as soon as we can.</p>
    </SuccessContainer>
  </Layout>
)

export default Contact
