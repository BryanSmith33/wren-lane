import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Logo } from '../uiComponents/uiComponents'
import logo from '../../../content/assets/images/wren_lane_logo.png'

const DesktopNavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
  height: 50px;
  width: 100%;
  padding: 1em 2em;
  box-shadow: 0px 4px 20px #d0d0d0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
`
const NavMenuToggle = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Quickie';
  font-weight: bold;
  cursor: pointer;
`
const NavbarLogo = styled(Logo)`
  height: 35px;
`
const NavText = styled.span`
  position: relative;
  top: 4px;
  left: 6px;
`

const NavBar = ({method}) => {

  return (
    <Fragment>
      <DesktopNavContainer>
        <NavMenuToggle onClick={method}>
          <NavbarLogo src={logo} />
          <NavText>menu</NavText>
        </NavMenuToggle>
      </DesktopNavContainer>
    </Fragment>
  )
}

export default NavBar
