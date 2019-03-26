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
`
const Container = styled.div`
  max-width: 1125px;
  padding: 4.5em 1em 2em;
  margin: 0 auto;
  min-height: calc(100vh - 372px);
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
  margin-bottom: .3em;
`

class Template extends Component {
  constructor() {
    super()
    this.state = {
      menuVisible: false
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
      <SiteWrapper onScroll={this.handleBottomScroll}>
        <Menu visible={this.state.menuVisible} />
        <Fragment>
          <NavBar method={this.handleMenuClick} />
          <Container onClick={this.state.menuVisible ? this.handleMenuClick : undefined }>
            <WrenLaneContainer>
              <Wren>Wren</Wren>
              <Lane>Lane</Lane>
            </WrenLaneContainer>
            {children}
          </Container>
          <Footer />
        </Fragment>
      </SiteWrapper>
    )
  }
}

export default Template
