import classNames from 'classnames'
import React from 'react'
import { FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
import dayjs from 'dayjs';

const RedSocial = ({
    className = ['botWra', 'flex', 'w-1/2', 'items-center', 'justify-center'],
    colorIcon = '#003889'
}) => {

    const currentYear = dayjs().year();

    const redSocItems = [
        {
            red: 'instagram',
            icon: <FaInstagram 
                    size={'100%'} 
                    color={colorIcon}
                />,
            url: ''
        },
        {
            red: 'twitter',
            icon: <RiTwitterXLine 
                size={25} 
                color={colorIcon}
            />,
            url: ''
        },
        {
            red: 'linkedin',
            icon: <FaLinkedinIn 
                    size={'100%'} 
                    color={colorIcon}
                />,
            url: ''
        },
        {
            red: 'google',
            icon: <FaGoogle 
                    size={25} 
                    color={colorIcon}
                />,
            url: ''
        },
        
   
    ]
  return (
    <div className="redSocBox">

    <div className={classNames(...className)}>

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
  )
}

export default RedSocial