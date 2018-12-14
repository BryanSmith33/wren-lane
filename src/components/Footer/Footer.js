import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLinks'
import Insta from './Insta'
import SubScribe from './Subscribe'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  padding: 1em 3em 0;
  @media (max-width: 1450px){
    /* flex-direction: column-reverse; */
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
