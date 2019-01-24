import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import '../../content/assets/styles/global.css'
import styled from 'styled-components'
import { Logo } from './uiComponents/uiComponents'
import logo from '../../content/assets/images/wren_lane_logo.png'

import NavBar from './NavBar/NavBar'
import Menu from './NavBar/Menu'
import Footer from './Footer/Footer'

const SiteWrapper = styled.div`
  transform: ${props => (props.visible ? `translateX(300px)` : `initial`)};
  position: ${props => (props.visible ? `fixed` : `initial`)};
  transition: all 0.3s linear;
`
const Container = styled.div`
  max-width: 1125px;
  padding: 4.5em 1em 2em;
  margin: 0 auto;
`
const Wren = styled.span`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  font-weight: 100;
`
const Lane = styled.span`
  font-family: 'Bodigold', Zapf Chancery, cursive;
  font-weight: 100;
`
const WrenLaneContainer = styled.h1`
  text-align: center;
  font-size: 3.25em;
`

class Template extends Component {
  constructor() {
    super()
    this.state = {
      menuVisible: false,
    }
  }

  handleMenuClick = () => {
    this.setState(prevState => {
      return {
        menuVisible: !prevState.menuVisible,
      }
    })
  }

  render() {
    const { children } = this.props

    return (
      <SiteWrapper visible={this.state.menuVisible}>
        <Menu />
        <div>
          <NavBar method={this.handleMenuClick} />
          <Container>
            <WrenLaneContainer>
              <Wren>Wren</Wren>
              <Lane>Lane</Lane>
            </WrenLaneContainer>
            {children}
          </Container>
          <Footer />
        </div>
      </SiteWrapper>
    )
  }
}

export default Template
