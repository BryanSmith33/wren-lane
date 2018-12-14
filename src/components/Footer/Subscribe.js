import React from 'react'
import styled from 'styled-components'

const FooterSubScribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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
  box-shadow: inset 0px 0px 3px 1px #cecece;
  padding: 0 0.5em;
  font-family: 'Quicksand';
  font-weight: bold;
`
const SubScribeButton = styled.button`
  border: none;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  font-family: 'Quicksand';
  font-weight: bold;
  font-size: 1em;
`

const FooterSubScribe = () => (
  <FooterSubScribeContainer>
    <h3>Want to stay in the loop?</h3>
    <p>Subscribe to get an update whenever a new post goes live</p>
    <FooterSubscribeForm>
      <SubscribeInputContainer>
        <SubscribeInput type="text" placeholder="name" />
        <SubscribeInput type="text" placeholder="email" />
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