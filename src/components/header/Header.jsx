import React from 'react'
import CTA from './CTA'
import me from '../../assets/me-2-without-bg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5> Hello I'm</h5>
        <h1> Nowfeel SAFI</h1>
        <h5 className="text-light">Back-End Developer</h5>
        <CTA />
      </div>
    </header>
  ) 
}

export default Header
