import React, { Fragment } from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const ContactTitle = styled.h1`
  text-align: center;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const ContactText = styled.p`
  width: 300px;
`
const ContactEmail = styled.a`
  border-bottom: 1px solid #111;
`
const ContactForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`
const FormInput = styled.input`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  height: 30px;
  padding: 0em 0.5em;
  margin: 1em 0;
  border: none;
  border-bottom: 1px solid #8b8b8b;
  background: #fffefc;
`
const FormTextArea = styled.textarea`
  resize: none;
  height: 200px;
  margin: 1em 0;
  font-family: 'Libreville', 'Times New Roman', Times, serif;
`
const FormBtn = styled.button`
  border: none;
  text-transform: uppercase;
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: bold;
  padding: 0.8em;
  margin: 1em 0;
  color: #fffefc;
  background: #111;
`

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
      title={`Wren Lane | Contact Us`}
    />
    <Fragment>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactContainer>
        <ContactText>
          Want to know more? Looking for a recipe? Interested in working with
          us? Shoot us a message and we will get back to you. You can also reach
          us at{' '}
          <ContactEmail href="mailto:hello@wrenlane.com">
            hello@wrenlane.com
          </ContactEmail>
        </ContactText>
        <ContactForm
          name="contact"
          data-netlify="true"
          method="POST"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormInput
            type="text"
            placeholder="Name"
            name="name"
            required
            id="name"
          />
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            required
            id="email"
          />
          <FormTextArea
            placeholder="Enter your message here..."
            name="message"
          />
          <FormBtn>send</FormBtn>
        </ContactForm>
      </ContactContainer>
    </Fragment>
  </Layout>
)

export default Contact
