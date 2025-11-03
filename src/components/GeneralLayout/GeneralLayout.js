import classNames from 'classnames'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const GeneralLayout = ({children, showFooter = true}) => {
  return (

    <div className={classNames('flex', 'flex-col', 'justify-between')}>
        <Header />
      <div className={classNames('responsiveWidth', 'w-full')}>
          {children}
      </div>

      {
        showFooter &&
        <Footer />
      }
    </div>
  )
}

export default GeneralLayout