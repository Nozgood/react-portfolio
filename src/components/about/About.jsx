import React from 'react'
import Me from '../../assets/pas-moi-test.webp';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-img">
          <img src={Me} alt="Moi qui sourit" />
        </div>

        </div>

        <div className="about__content">

        </div>
      </div>
    </section>
  )
}

export default About