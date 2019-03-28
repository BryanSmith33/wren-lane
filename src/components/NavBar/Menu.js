import React, {Component} from 'react'
import styled from 'styled-components'
import img from '../../../content/assets/images/IMG_8227.jpg'
import { Link } from 'gatsby'

const MenuContaier = styled.div`
  width: 300px;
  height: calc(100vh - 50px);
  background: #fffefc;
  z-index: 2;
  position: fixed;
  left: ${props => (props.visible ? `0` : `-1000px`)};
  top: 50px;
  border-right: 1px solid #bdbdbd;
  box-shadow: 3px -1px 4px #eee;
  transition: left .7s cubic-bezier(0.25, 0.46, 0.07, 0.85);
`
const MenuImgContainer = styled.div``
const MenuImg = styled.img`
  max-width: 100%;
`
const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  text-transform: uppercase;
`
const NavLink = styled(Link)`
  font-size: 1.1em;
  font-family: 'Quickie', Arial, Helvetica, sans-serif;
  font-weight: bold;
  &:nth-child(odd){
    margin: 1em 0;
  }
`

const Menu = ({visible, bottom}) => {
  return (
    <MenuContaier visible={visible} bottom={bottom}>
      <MenuImgContainer>
        <MenuImg src={img} alt="" />
      </MenuImgContainer>
      <MenuNav>
        <NavLink to={`/`}>home</NavLink>
        <NavLink to={`/about`}>about us</NavLink>
        <NavLink to={`/contact`}>contact</NavLink>
        <NavLink to={`/search`}>search</NavLink>
      </MenuNav>
    </MenuContaier>
  )
}

export default Menu
