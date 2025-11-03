import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import dayjs from 'dayjs';

import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = ({show = true}) => {
    const currentYear = dayjs().year();

    const redSocItems = [
        {
            red: 'instagram',
            icon: <FaInstagram 
                    size={'100%'} 
                    // color='#003889'
                     color='#003889'
                />,
            url: ''
        },
        {
            red: 'twitter',
            icon: <RiTwitterXLine 
                size={25} 
                color='#003889'
            />,
            url: ''
        },
        {
            red: 'linkedin',
            icon: <FaLinkedinIn 
                    size={'100%'} 
                    color='#003889'
                />,
            url: ''
        },
        {
            red: 'google',
            icon: <FaGoogle 
                    size={25} 
                    color='#003889'
                />,
            url: ''
        },
        
    ]

  return (

    <>

    {
        show &&
    <div className={classNames('responsiveWidth')}>

        <div className={classNames('footerWrapper')}>

            <div className={classNames('ofiBox')}>

                <div className={classNames('imgBox', 'overflow-hidden')}>

                    <Image src={'/img/hrk_logo_lineas_azul.svg'} alt={'logo hrk'} width={200} height={200}/>

                </div>

                <div className={classNames('infBox')}>

                    <p className={classNames('text-xs')}>
                        <span>HRK Global Trade</span> main contracting center is located in <span>Miami, United States</span> with local and representative offices located in <span>Panama City, Panama</span> and <span>Ciudad Guayana, Venezuela</span>.
                    </p>

                </div>

            </div>

            <div className="addBox">

                <p className={classNames('titTex')}>Our address</p>

                <p className={classNames('text-xs')}>
                    Calle 55, PH SFC. Oficina 26D
               </p>

               <p className={classNames('text-xs')}>
                    Obarrio, Panama City, Panamá
               </p>

            </div>

            <div className="redSocBox">

                <div className={classNames('botWra', 'flex', 'w-1/2', 'items-center', 'justify-center')}>

                    {
                        redSocItems.map((red, key) => {

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

                <p><span>{`${currentYear} ©`}</span>  All rights reserved.</p>
                
            </div>

        </div>



    </div>
    }
    
    </>

  )
}

export default Footer