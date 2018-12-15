import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Logo } from '../uiComponents/uiComponents'
import logo from '../../assets/images/wren_lane_logo.png'

const FooterNavLinkContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const NavLink = styled(Link)`
  font-size: 1.1em;
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  &:nth-child(odd) {
    margin: 1em 0;
  }
`

const NavLinks = () => (
  <FooterNavLinkContainer>
    <Logo src={logo} />
    <FooterLinks>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/about`}>About Us</NavLink>
      <NavLink to={`/contact`}>Contact</NavLink>
      <NavLink to={`/search`}>Search</NavLink>
    </FooterLinks>
  </FooterNavLinkContainer>
)

export default NavLinks
