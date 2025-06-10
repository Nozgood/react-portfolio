import React from 'react'
import Me from '../../assets/sans-titre-2.png';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            My name is Nowfeel, I am 26 years old and I'm currently based in Lille, France.<br/><br/>
            I'm a software engineer with a strong focus on backend development and system design. <br/>
            What I enjoy most about software development is solving real-world problems and meeting evolving needs. <br/>
            Golang is my language of choice, though I always view programming languages as tools — the right one depends on the job.<br/><br/>
            I'm deeply committed to continuous learning. In a field like computer science, where everything evolves rapidly, staying curious and adaptable is essential
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About
