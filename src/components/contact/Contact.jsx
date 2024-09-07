import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bzvsyen', 'template_4gbezva', form.current, 'SlkHTa8_mxo_C_Nia')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nowfeel.dev.pro@gmail.com</h5>
            <a href="mailto:nowfeel.dev.pro@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Selecto00</h5>
            <a href="https://twitter.com/messages/compose" target='_blank' rel='noreferrer'>Send a Message</a>
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