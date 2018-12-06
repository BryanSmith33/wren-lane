import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Logo, Wren, Lane } from '../uiComponents/uiComponents'
import logo from '../../assets/images/wren_lane_logo.png'

const FooterContainer = styled.footer`
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1em;
`
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const NavLink = styled(Link)`
  font-size: 1.1em;
  font-family: 'Quicksand';
  font-weight: bold;
  &:nth-child(odd) {
    margin: 1em 0;
  }
`

const Footer = () => (
  <FooterContainer>
    <div>
      <Logo src={logo} />
      <FooterLinks>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About Us</NavLink>
        <NavLink to={`/contact`}>Contact</NavLink>
        <NavLink to={`/search`}>Search</NavLink>
      </FooterLinks>
    </div>
  </FooterContainer>
)

export default Footer
