import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../../content/assets/styles/global.css'
import styled from 'styled-components'
import { Logo } from './uiComponents/uiComponents'
import logo from '../../content/assets/images/wren_lane_logo.png'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

const Container = styled.div`
  max-width: 1125px;
  padding: 3em 1em 2em;
  margin: 0 auto;
`
const HiddenLogo = styled(Logo)`
  transition: opacity 0.3s;
  text-align: center;
  position: relative;
  top: 45px;
  left: 50%;
`
const Wren = styled.span`
  font-family: 'Libreville', 'Times New Roman', Times, serif;
  font-weight: 100;
`
const Lane = styled.span`
  font-family: 'Bodigold', Zapf Chancery, cursive;
  font-weight: 100;
`

class Template extends Component {
  state = {
    hideNav: false,
  }
  handleHideNav = () => {
    const { hideNav } = this.state

    window.scrollY > this.prev
      ? !hideNav &&
        this.setState({
          hideNav: true,
        })
      : hideNav && this.setState({ hideNav: false })

    this.prev = window.scrollY
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleHideNav)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHideNav)
  }
  render() {
    const { location, children } = this.props

    return (
      <div>
        <NavBar hide={this.state.hideNav} />
        <HiddenLogo src={logo} alt={`Wren Lane`} style={{ opacity: this.state.hideNav ? 1 : 0 }} />
        <Container>{children}</Container>
        <Footer />
      </div>
    )
  }
}

export default Template
