import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nowfeel-safi-0294531b5/" target="_blank" rel='noopener noreferrer'> <FaLinkedin /></a>
        <a href="https://github.com/nozgood" target="_blank" rel='noopener noreferrer'> <FaGithub /></a>
        <a href="https://twitter.com/selecto00" target="_blank" rel='noopener noreferrer'> <FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials