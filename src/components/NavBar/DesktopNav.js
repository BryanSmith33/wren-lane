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
`
const NavLinks = styled.div`
  display: flex;
  @media (max-width: 800px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3em;
    background: #fffffff0;
    justify-content: space-around;
    align-items: center;
  }
`
const NavLink = styled(Link)`
  font-size: 1.1em;
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  &:nth-child(odd) {
    margin: 0 1em;
  }
  @media (max-width: 800px) {
    &:nth-child(odd) {
      margin: initial;
    }
  }
`
const CompanyName = styled.h1`
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
