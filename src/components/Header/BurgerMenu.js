'use client'

import React, {useRef, useState} from 'react';
import ModalMenu from './ModalMenu';
import classNames from 'classnames';
import Menu from './Menu';

const BurgerMenu = () => {

    const [pulse, setPulse] = useState(false);
  
  return (

    <>

       { pulse && <div className="masOveBox slide-menu" /> } 

        <div 
            onClick={()=> setPulse(!pulse)} 
            className={classNames(`burgerMenu ${pulse ? 'burgerIcon open' : 'burgerIcon close'}`)}
        >

          <span />
          <span />
          <span />
          <span />

      </div>

      {
        pulse && <Menu pulse={pulse} setPulse={setPulse}/>
      }
      
   
    
    </>


  )
}

export default BurgerMenu;