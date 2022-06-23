import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
      <a href="logo" className='footer__logo'>NOWFEEL SAFI</a>

      <ul className="permalinks">
        <li> <a href="#header"> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience"> Experience </a></li>
        <li> <a href="#services"> Services </a></li>
        <li> <a href="#portfolio"> Portfolio </a></li>
        <li> <a href="#testimonials"> Testimonials </a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/nowfeel.safi"> <FiFacebook /></a>
        <a href="https://twitter.com/selecto00"> <AiOutlineTwitter /></a>
        <a href="https://instagram.com/nowfeel.dev"> <AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nowfeel Safi. All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default Footer