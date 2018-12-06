import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Logo, Wren, Lane } from '../uiComponents/uiComponents'
import logo from '../../assets/images/wren_lane_logo.png'

const DesktopNavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fffffff0;
  height: 90px;
  width: 100%;
  padding: 1em 3em;
  box-shadow: 0px 4px 20px #d0d0d0;
  position: fixed;
  left: 0;
  transition: top 0.3s;
  z-index: 2;
  @media (max-width: 800px) {
    display: none;
  }
`
const NavLinks = styled.div`
  display: flex;
`
const NavLink = styled(Link)`
  font-size: 1.1em;
  font-family: 'Quicksand';
  font-weight: bold;
  &:nth-child(odd) {
    margin: 0 1em;
  }
`
const CompanyName = styled.h1`
  width: 257px;
  @media (max-width: 800px) {
    width: initial;
    text-align: center;
  }
`

const DesktopNav = (props) => {
  return <DesktopNavContainer style={{ top: props.hide ? -100 : 0 }}>
      <Link to={`/`}>
        <CompanyName>
          <Wren>Wren</Wren>
          <Lane>Lane</Lane>
        </CompanyName>
      </Link>
      <Logo src={logo} alt={`Wren Lane`} />
      <NavLinks>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About Us</NavLink>
        <NavLink to={`/contact`}>Contact</NavLink>
        <NavLink to={`/search`}>Search</NavLink>
      </NavLinks>
    </DesktopNavContainer>
}

export default DesktopNav
