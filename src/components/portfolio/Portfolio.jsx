import React from 'react'
import nftImg from '../../assets/portfolio-img-exemple.jpg';
import faqImg from '../../assets/portfolio-img-exemple-2.jpg';
import ratingImg from '../../assets/portfolio-img-exemple-3.jpg';


const data = [
  {
    id: 1,
    image: nftImg,
    title: 'NFT Card Component',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: faqImg,
    title: 'FAQ Card Component',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: ratingImg,
    title: 'Rating Card Component',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt= {title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'  target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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