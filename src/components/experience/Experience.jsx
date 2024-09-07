import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Backend Development - Main Skill</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Golang</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
                <div>              
                  <h4>Python</h4>
                </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Software Development Practices</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Domain-Driven Design</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Clean Architecture</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Front-End Development</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience