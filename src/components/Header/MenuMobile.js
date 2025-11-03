'use client';
import React, { useState } from 'react'
import Menu from './Menu'

const MenuMobile = ({}) => {

    const [showMenu, setShowMenu] = useState(false);

  return (

    <>
       {showMenu && <Menu />} 

    </>
  )
}

export default MenuMobile