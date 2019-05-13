import React, { Component } from 'react'
import styled from 'styled-components'
import { Wren, Lane } from './uiComponents/uiComponents'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SubScribeContainer = styled.div`
  width: 310px;
  height: 458px;
  margin: 1.5em 1.5em 0;
  padding: 0.5em;
  text-align: center;
  border: 1px solid #8b8b8b;
  background: #fffefc;
  box-shadow: 0px 0px 8px #a2a2a2;
  @media (max-width: 800px) {
    margin: 1.5em 0;
  }
`
const Subscribe = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  height: 30px;
  padding: 0em 0.5em;
  margin: 1em 0;
  border: none;
  border-bottom: 1px solid #8b8b8b;
  background: #fffefc;
`
const Button = styled.button`
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
const SubscribeBrand = styled.h1`
  margin-top: 0.8em;
`
const SubscribSuccessContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

class SubscribeForm extends Component {
  state = {
    subscribeSuccess: null,
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(e.target.email.value, {
      FNAME: e.target.name.value,
    }).then(() => {
      this.setState({ subscribeSuccess: true })
    })
  }

  render() {
    return (
      <SubScribeContainer>
        {this.state.subscribeSuccess ? (
          <SubscribSuccessContaier>
            <h1>Thanks for subscribing!</h1>
            <p>XOXO,</p>
            <SubscribeBrand>
              <Wren>Wren</Wren> <br />
              <Lane>Lane</Lane>
            </SubscribeBrand>
          </SubscribSuccessContaier>
        ) : (
          <div>
            <h2>Stay in the loop</h2>
            <p>
              Home renovation, family, style and health. Get updated whenever a
              new post goes live!
            </p>
            <Subscribe onSubmit={this.handleFormSubmit}>
              <Input type="text" placeholder="Name" name="name" required />
              <Input type="email" placeholder="Email" name="email" required />
              <Button>submit</Button>
            </Subscribe>
            <SubscribeBrand>
              <Wren>Wren</Wren> <br />
              <Lane>Lane</Lane>
            </SubscribeBrand>
          </div>
        )}
      </SubScribeContainer>
    )
  }
}

export default SubscribeForm
