import React from 'react'
import { FiLinkedin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="logo" className='footer__logo'>NOWFEEL SAFI</a>

      <ul className="permalinks">
        <li> <a href="#header"> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience"> Experience </a></li>
        <li> <a href="#portfolio"> Portfolio </a></li>
      </ul>

        <div className="footer__socials">
            <a href="https://linkedin.com/in/nowfeel-safi-0294531b5"> <FiLinkedin/></a>
            <a href="https://github.com/nozgood"> <FaGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Nowfeel Safi. All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
