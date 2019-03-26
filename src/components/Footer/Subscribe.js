import React from 'react'
import styled from 'styled-components'

const FooterSubScribeContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: 'Libreville','Times New Roman',Times,serif;
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

const FooterSubScribe = () => (
  <FooterSubScribeContainer>
    <h3>Want to stay in the loop?</h3>
    <p>Subscribe to get an update whenever a new post goes live</p>
    <FooterSubscribeForm>
      <SubscribeInputContainer>
        <SubscribeInput type="text" placeholder="Name" />
        <SubscribeInput type="text" placeholder="Email" />
      </SubscribeInputContainer>
      <SubScribeButton>
        subs
        <br />
        cribe
      </SubScribeButton>
    </FooterSubscribeForm>
  </FooterSubScribeContainer>
)

export default FooterSubScribe
