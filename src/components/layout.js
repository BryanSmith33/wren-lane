import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../assets/styles/global.css'
import styled from 'styled-components'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

const Container = styled.div`
  max-width: 1125px;
  padding: 6em 1em 2em;
  margin: 0 auto;
`
const Brand = styled.h1`
  text-align: center;
  position: relative;
  top: 55px;
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
        <Brand>
          <Wren>Wren</Wren>
          <Lane>Lane</Lane>
        </Brand>
        <Container>{children}</Container>
        <Footer />
      </div>
    )
  }
}

export default Template
