
'use client';

import classNames from 'classnames'
import Link from 'next/link'
import React, { useRef } from 'react'
import '../../styles/header.scss';
import { isMobile } from 'react-device-detect';


const Menu = ({ setPulse, className = 'botBox' }) => {

    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const productRef = useRef(null);
    const servicesRef = useRef(null);

  return (

      <div className={classNames(className, 'slide-bottom')}>
    
        <Link 
          href={'/'}
          onClick={()=>isMobile && setPulse(false)}
        >
    
          <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start')}>
            <p ref={contactRef} className={classNames('popBold')}>Home</p>
            <div style={{width: contactRef?.current?.clientWidth}} className={classNames('bg-red-700', 'linBox', 'transition-all')} />
    
          </div>
    
        </Link>
    
        <Link 
        
          href={'/contact'}
          onClick={()=>isMobile && setPulse(false)}
          >
    
          <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start')}>
            <p ref={homeRef} className={classNames('popBold')}>Contact</p>
            <div style={{width: homeRef?.current?.clientWidth}} className={classNames('bg-red-700', 'linBox', 'transition-all')} />
          </div>
        </Link>
    
        <Link 
        
          href={'/products'}
          onClick={()=>isMobile && setPulse(false)}
        >
          <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start')}>
            <p ref={productRef} className={classNames('popBold')}>Products</p>
            <div style={{width: productRef?.current?.clientWidth}} className={classNames('bg-red-700', 'linBox', 'transition-all')} />
          </div>
        </Link>
        
    
        <Link 
      
          href={'/services'}
          onClick={()=>isMobile && setPulse(false)}
        >
          <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start')}>
            <p ref={servicesRef} className={classNames('popBold')}>Services</p>
            <div style={{width: servicesRef?.current?.clientWidth}} className={classNames('bg-red-700', 'linBox', 'transition-all')} />
          </div>
        </Link>
    
      </div>


  )
}

export default Menu