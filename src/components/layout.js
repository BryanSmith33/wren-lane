import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import '../../content/assets/styles/global.css'
import styled from 'styled-components'

import NavBar from './NavBar/NavBar'
import Menu from './NavBar/Menu'
import Footer from './Footer/Footer'

const SiteWrapper = styled.div``
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
  margin-bottom: 0.3em;
`

class Template extends Component {
  state = {
    menuVisible: false,
  }

  handleMenuClick = () => {
    this.setState((prevState) => {
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
          <Container
            onClick={this.state.menuVisible ? this.handleMenuClick : undefined}
          >
            <WrenLaneContainer>
              <Link to="/">
                <Wren>Wren</Wren>
                <Lane>Lane</Lane>
              </Link>
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
