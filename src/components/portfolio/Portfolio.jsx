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
  },
  {
    id: 2,
    image: epicEvents,
    title: 'Epic Events',
    github: 'https://github.com/Nozgood/p12_epic_events',
  },
  {
    id: 3,
    image: gudlft,
    title: 'Gudlft',
    github: 'https://github.com/Nozgood/p11_gudlft',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt= {title} />
                </div>
                <h3>{title}</h3>
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