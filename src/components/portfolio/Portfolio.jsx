import React from 'react'
import lettings from '../../assets/p13_ecole_logo.png';
import epicEvents from '../../assets/p12_logo.png';
import gudlft from '../../assets/p11_logo.png';


const data = [
  {
    id: 1,
    image: lettings,
    title: 'Orange County Lettings',
    github: 'https://github.com/Nozgood/p13_lettings',
    description: "(School Project) My job on this project was to improve an django website, both in terms of code and deployment. My tasks include restructuring the modular architecture, addressing technical debt, adding a CI/CD pipeline, monitoring with Sentry, and creating technical documentation using Read The Docs and Sphinx, along with selecting the best hosting solution for deployment."
  },
  {
    id: 2,
    image: epicEvents,
    title: 'Epic Events',
    github: 'https://github.com/Nozgood/p12_epic_events',
    description: "(School Project) I had to build a CLI-based CRM system to manage client and event data securely using Python, with logging through Sentry. My task includes creating a secure database, implementing best practices, and delivering the project with code and a database schema via GitHub."
  },
  {
    id: 3,
    image: gudlft,
    title: 'Gudlft',
    github: 'https://github.com/Nozgood/p11_gudlft',
    description: "(School Project) Güdlft, a company organizing fitness competitions, is developing a simpler platform for regional competition management. I was tasked to fix bugs from phase 1 and implementing phase 2. This includes setting up tools, resolving issues, and creating test and performance reports."
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, description }) => {
            return (
              <article key={id} className="portfolio__item">
                <div>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                <p>
                  {description}
                  <br/><br/>
                </p>
                </div>
                <div className="portfolio__item-cta">
                <a href={github} className='link portfolio__btn'  target='_blank' rel='noreferrer'>GitHub</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio