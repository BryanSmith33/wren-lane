import React from 'react'
import styled from 'styled-components'
import img from '../../../content/assets/images/IMG_8227.jpg'
import { Link } from 'gatsby'

const MenuContaier = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  left: -300px;
  border-right: 1px solid #bdbdbd;
  box-shadow: 3px -1px 4px #eee;
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

const Menu = () => {
  return (
    <MenuContaier>
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
