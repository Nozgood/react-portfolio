import React from 'react'
import Me from '../../assets/sans-titre-2.png';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-img">
          <img src={Me} alt="About" />
        </div>
        </div>
        <div className="about__content">
          <p>
            My name is Nowfeel, I am 25 years old. I am currently based in Lille, France.<br/><br/>
            During this past 3 years (2021-2024), my purpose was to learn as much as possible about software engineering
            via
            Internship and graduations.
            Today and for the rest of my career, my objective is to use the different skills I acquired to contribute to
            projects
            that can make and will make the world better.<br/>
            And Also to keep learning, because I'm convinced that we never stop to. <br/><br/>
            I currently work as Back-End Developer at Bliink, a French Start-Up in the advertising, based in Paris.
            On my free time, I learn new things about blockchain and smart contracts.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About
