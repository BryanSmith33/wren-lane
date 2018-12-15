import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLinks'
import Insta from './Insta'
import SubScribe from './Subscribe'

const FooterContainer = styled.footer`
  border-top: 1px solid #eee;
  padding: 1em 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  clear: both;
  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 1em 0 3.5em;
  }
`

const Footer = () => (
  <FooterContainer>
    <NavLink />
    <SubScribe />
    <Insta />
  </FooterContainer>
)

export default Footer
