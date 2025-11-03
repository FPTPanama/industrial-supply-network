'use client';
import React, { useState } from 'react'
import Menu from './Menu'

const MenuMobile = () => {

    const [showMenu] = useState(false);

  return (

    <>
       {showMenu && <Menu />} 

    </>
  )
}

export default MenuMobile