import React, { Fragment } from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const NavBar = ({ hide }) => {
  return <Fragment>
      <DesktopNav hide={hide} />
      <MobileNav hide={hide} />
    </Fragment>
}

export default NavBar
