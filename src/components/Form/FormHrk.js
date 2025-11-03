
'use client';
import classNames from 'classnames'
import React, { useState } from 'react';
import { LuSend } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import ModalHrk from '../ModalHrk/ModalHrk';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { validEmail, validNombre, validPhone } from '@/utils/validations';



const FormHrk = () => {
  const [nombre, setNombre] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [showErrorEmail, setshowErrorEmail] = useState(false);
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorPhone, setShowErrorPhone] = useState(false);

  const emailError = validEmail(email);
  const nameError = validNombre(nombre);
  const phoneError = validPhone(phone);
  const isValid = emailError.ok && nameError.ok && phoneError.ok;
  




  const sendEmail = async () => {


    setShowModal(true);

    const dataSend = {
      name: nombre,
      email_contact: email,
      phone_contact: phone
    }

    try {

      setLoadingResponse(true)

      const res = await emailjs.send(
        'hrk_global_service_mail',
        'hrk_template_email',
        dataSend,
        {
          publicKey: 'RpK5TowBV0ICJanq6'
        })

      if (res) {
      }

    } catch (error) {

      console.log(error)

    }


    setLoadingResponse(false);





  }

  return (
    <div className={classNames("forBox")}>

      <ModalHrk showModal={showModal}>

        {
          loadingResponse ?

            <p className={classNames('text-white', 'text-5xl', 'slide-fwd-center')}>Sending your contact</p>

            :

            <div className={classNames('flex', 'flex-col', 'md:w-1/2', 'w-full', 'h-1/2', 'border-white', 'rounded-3xl', 'p-5', 'justify-center', 'items-center', 'gap-4', 'slide-fwd-center')}>
              <MdOutlineMarkEmailRead size={400} color='white' />
              <div className={classNames('flex', 'flex-col', 'w-9/12', 'h-fit', 'md:items-center', 'md:justify-center')}>
                <p style={{ fontFamily: 'popBold' }} className={classNames('text-white', 'md:text-5xl', 'text-3xl', 'font-bold')}>Thanks for your message.</p>
                <p style={{ fontFamily: 'popThin' }} className={classNames('text-white', 'md:text-5xl', 'text-3xl')}> We will contact to you soon.</p>
              </div>

              <button onClick={() => setShowModal(false)} className={classNames('text-white', 'border-white', 'border-2', 'h-40', 'px-24', 'rounded-2xl', 'hover:text-xl', 'hover:px-28', 'transition-all')}>Done</button>

            </div>

        }
      </ModalHrk >

      <div className={classNames('forInpWra')}>
        <div className={classNames('inpBox')}>
          <label
            htmlFor=""
            className={classNames({ 'text-primary': nameError.ok || nombre === null }, { 'text-red-600': !nameError.ok && nombre !== null })}
          >
            Name
          </label>
          <input
            className={classNames(
              'border-2',
              { 'border-primary text-primary': nameError.ok || nombre === null },
              { 'border-red-600 text-red-600': !nameError.ok && nombre !== null})
            }
            type="text"
            onChange={(e) => {
              setNombre(e.target.value);
            }}


          />

          <div className='h-2'>
            { !nameError.ok && nombre !== null && <p className={classNames({ 'text-red-600': !nameError.ok }, { 'text-green-600': nameError.ok }, 'text-xs', 'mt-1')}>{nameError.mensaje}</p>}
          </div>

        </div>
        <div className={classNames('inpBox')}>
          <label
            htmlFor="Email"
            className={classNames({ 'text-primary': emailError.ok || email === null }, { 'text-red-600': !emailError.ok && email !== null })}
          >
            Email
          </label>
          <input
            className={classNames(
              'border-2',
              { 'border-primary text-primary': emailError.ok || email === null },
              { 'border-red-600 text-red-600': !emailError.ok && email !== null})
            }
            id={'email'}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setshowErrorEmail(!emailError.ok)
            }}
          />

          <div className='h-2'>
            {!emailError.ok && email !== null && <p className={classNames({ 'text-red-600': !emailError.ok }, { 'text-green-600': emailError.ok }, 'text-xs', 'mt-1')}>{emailError.mensaje}</p>}
          </div>


        </div>

        <div className={classNames('inpBox')}>
          <label
            htmlFor=""
            className={classNames({ 'text-primary': phoneError.ok || phone === null }, { 'text-red-600': !phoneError.ok && phone !== null })}
          >
            Phone
          </label>
          <input
            type="telephone"
            className={classNames(
              'border-2',
              { 'border-primary text-primary': phoneError.ok || phone === null },
              { 'border-red-600 text-red-600': !phoneError.ok && phone !== null})
            }
            onChange={(e) => {
              setPhone(e.target.value);
              setShowErrorPhone(!phoneError.ok)
            }}
          />
         <div className='h-2'>
            {!phoneError.ok && phone !== null && <p className={classNames({ 'text-red-600': !phoneError.ok }, { 'text-green-600': phoneError.ok }, 'text-xs', 'mt-1')}>{phoneError.mensaje}</p>}
          </div>
        </div>
      </div>

      <div className={classNames(
        'butBox',
        )}
        >
        <button
        className={classNames(

          {'bg-primary text-white': isValid},
          {'bg-transparent text-primary': !isValid}
        )}
          onClick={() => {
         isValid && sendEmail()
          }}> Send <LuSend /></button>
      </div>

    </div>
  )
}

export default FormHrk