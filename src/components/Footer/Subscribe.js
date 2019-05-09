import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Wren, Lane } from '../uiComponents/uiComponents'

const FooterSubScribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  @media (max-width: 800px) {
    margin: 3em 0;
    max-width: 600px;
    border: 1px solid #8b8b8b;
    padding: 3em 1em;
    width: inherit;
    box-shadow: 0px 3px 7px #a2a2a2;
  }
  @media (max-width: 600px) {
    margin: 3em 1em;
  }
`
const FooterSubscribeForm = styled.form`
  display: flex;
  border: 1px solid #9e9e9e;
  border-radius: 3px;
  width: 100%;
`
const SubscribeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const SubscribeInput = styled.input`
  height: 30px;
  border: none;
  padding: 0 0.5em;
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  &:first-of-type {
    border-bottom: 1px solid #9e9e9e;
  }
`
const SubScribeButton = styled.button`
  border: none;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1em;
`

class FooterSubScribe extends Component {
  constructor() {
    super()
    this.state = {
      subscribeSuccess: null,
    }
  }
  handleFormSubmit(e) {
    e.preventDefault()
    addToMailchimp(e.target.email.value, {
      FNAME: e.target.name.value,
    }).then(() => {
      console.log('hit')
      this.setState({ subscribeSuccess: true })
    })
  }
  render() {
    return (
      <FooterSubScribeContainer>
        {this.state.subscribeSuccess ? (
          <Fragment>
            <h3>Subscribed! XOXO,</h3>
            <h3>
              <Wren>Wren</Wren>
              <Lane>Lane</Lane>
            </h3>
          </Fragment>
        ) : (
          <Fragment>
            <h3>Want to stay in the loop?</h3>
            <p>Subscribe to get an update whenever a new post goes live</p>
            <FooterSubscribeForm onSubmit={(e) => this.handleFormSubmit(e)}>
              <SubscribeInputContainer>
                <SubscribeInput type="text" placeholder="Name" name="name" />
                <SubscribeInput type="text" placeholder="Email" name="email" />
              </SubscribeInputContainer>
              <SubScribeButton>
                subs
                <br />
                cribe
              </SubScribeButton>
            </FooterSubscribeForm>
          </Fragment>
        )}
      </FooterSubScribeContainer>
    )
  }
}

export default FooterSubScribe
