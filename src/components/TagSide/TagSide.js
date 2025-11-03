
'use client'
import classNames from 'classnames';
import React, { useState } from 'react';
import { FiHelpCircle } from "react-icons/fi";
import { PiShareNetworkBold } from "react-icons/pi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const TagSide = () => {

  const [showHelp, setShowHelp] = useState(false);
  const [showRedes, setShowRedes] = useState(false);

  const redSocItems = [
    {
        red: 'instagram',
        icon: <FaInstagram 
                size={'100%'} 
                color={'white'}
            />,
        url: ''
    },
    {
        red: 'twitter',
        icon: <RiTwitterXLine 
            size={'100%'} 
            color={'white'}
     
        />,
        url: ''
    },
    {
        red: 'linkedin',
        icon: <FaLinkedinIn 
                size={'100%'} 
                color={'white'}
            />,
        url: ''
    },
    {
        red: 'google',
        icon: <FaGoogle 
                size={'100%'} 
                color={'white'}
            />,
        url: ''
    },
    

]

  return (

    <>

      <div 
        onMouseOver={()=> setShowHelp(true)}
        onMouseLeave={() => setShowHelp(false)} 
        className={classNames('tagBox', 'rojBox')}
      >

        { 
          showHelp ?
          
          <div className='border-white flex flex-col w-full h-full justify-center items-start p-5'>
            <p className='text-white text-3xl leading-6'>Can we</p>
            <p className='text-white text-3xl leading-6'>help you?</p>

            

            <div className='flex flex-col w-full mt-4'>

              <p className='canTex text-white text-sm'>+507-3886501</p>

            </div>
          
          </div>

          :

          <div className='flex items-center gap-2 relative top-6 w-36 -rotate-90 left-0 text-white text-xs '>
            <p className='canTex'>Can We help you?</p>
            <FiHelpCircle />
            
          </div>
        
        }

      </div>
      <div 
        onMouseOver={()=> setShowRedes(true)}
        onMouseLeave={() => setShowRedes(false)} 
        className={classNames('tagBox', 'azuBox', 'transition-all')} 
      >

      { 
          showRedes ?
          
          <div className='border-white flex flex-col w-full h-full justify-center items-center p-5'>

            <p className='text-white text-3xl leading-6 mb-6'>Follow Us</p>

            <div className="redSocBox">

            <div className={classNames('botWra', 'flex', 'w-full', 'items-center', 'justify-center', 'h-10')}>

              {
                  redSocItems?.map((red, key) => {

                      return (

                          <div key={key} className={classNames('botBox')}>

                              <button className={classNames('flex', 'justify-center', 'items-center')}>
                                  {red.icon}
                              </button>

                          </div>
                      )
                  })
              }

            </div>

            </div>
          
          </div>

          :

          <div className='flex items-center gap-2 relative top-14 w-36 -rotate-90 left-0 text-white text-xs '>


            <p className='canTex'>Follow Us</p>
            <PiShareNetworkBold />
            
          </div>
        
        }

      </div>
    </>
  )
}

export default TagSide