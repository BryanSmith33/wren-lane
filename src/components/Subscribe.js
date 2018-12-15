import React, { Component } from 'react'
import styled from 'styled-components'
import { Wren, Lane } from './uiComponents/uiComponents'

const SubScribeContainer = styled.div`
  width: 310px;
  height: 458px;
  margin: 1.5em 1.5em 0;
  padding: 0.5em;
  text-align: center;
  border: 1px solid #8b8b8b;
  background: #fffefc;
  box-shadow: 1px 4px 10px #a2a2a2;
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
  padding: 2em 1em;
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

class SubscribeForm extends Component {
  render() {
    return (
      <SubScribeContainer>
        <h2>Stay in the loop</h2>
        <p>
          Home renovation, family, style and health. Stay in the loop whenever a
          new post goes live!
        </p>
        <Subscribe>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Button>submit</Button>
        </Subscribe>
        <SubscribeBrand>
          <Wren>Wren</Wren> <br />
          <Lane>Lane</Lane>
        </SubscribeBrand>
      </SubScribeContainer>
    )
  }
}

export default SubscribeForm
