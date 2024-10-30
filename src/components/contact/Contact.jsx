import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nowfeel.safi@gmail.com</h5>
            <a href="mailto:nowfeel.dev.pro@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Nowfeel Safi</h5>
            <a href="https://www.linkedin.com/messaging/thread/new/" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact