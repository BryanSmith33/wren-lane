import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Logo, Wren, Lane } from '../uiComponents/uiComponents'
import logo from '../../assets/images/wren_lane_logo.png'

const MobileNavContainer = styled.header`
  display: none;
  padding: 1em;
  box-shadow: 0px 4px 20px #d0d0d0;
  background: #fffffff0;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100px;
  transition: top 0.3s;
  z-index: 2;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const MobileLink = styled(Link)`
  display: flex;
`
const MobileNavLinks = styled.div`
  height: 45px;
  width: 60px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  box-shadow: 1px 3px 5px 0px #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const Line = styled.div`
  width: 75%;
  height: 3px;
  border-radius: 3px;
  background: #565656;
`
const CompanyName = styled.h1`
  width: 257px;
  @media (max-width: 800px) {
    width: initial;
    text-align: center;
  }
`

class MobileNav extends Component {
  render() {
    return (
      <MobileNavContainer style={{ top: this.props.hide ? -100 : 0 }}>
        <MobileLink to={`/`}>
          <CompanyName>
            <Wren>Wren</Wren><br />
            <Lane>Lane</Lane>
          </CompanyName>
          <Logo src={logo} alt={`Wren Lane`} />
        </MobileLink>
        <MobileNavLinks>
          <Line />
          <Line />
          <Line />
        </MobileNavLinks>
      </MobileNavContainer>
    )
  }
}

export default MobileNav
