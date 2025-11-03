'use client'
import React from 'react';
import Menu from './Menu';

const ModalMenu = ({
    visible = false,
    setShowModalMenu
}) => {

    return (

        <>
            {
                visible &&

                <div className="modalMenu slide-bottom">

                    <Menu isMobile className='botBoxMovWra' setShowMenu={setShowModalMenu}/>

                </div>


            }

        </>



    )

}

export default ModalMenu;