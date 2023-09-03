import React from 'react';
import "./portfolio.css"
import IMG from '../../assets/portfolio.jpg'
import { Link } from 'react-router-dom';


const data = {
  id: 1,
  title: 'Título 1',
  img: IMG,
  linkDemo: 'https://www.github.com/melvintivane',
  linkGithub: 'https://www.github.com/melvintivane',
}



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <Link to={`/project/${data.id}`}>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.img} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/melvintivane" className='button' target='_blank' rel="noreferrer">GitHub</a>
              <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </Link>
        <Link to={`/project/${data.id}`}>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.img} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/melvintivane" className='button' target='_blank' rel="noreferrer">GitHub</a>
              <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </Link>
        <Link to={`/project/${data.id}`}>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.img} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/melvintivane" className='button' target='_blank' rel="noreferrer">GitHub</a>
              <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </Link>
        <Link to={`/project/${data.id}`}>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.img} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/melvintivane" className='button' target='_blank' rel="noreferrer">GitHub</a>
              <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </Link>
        <Link to={`/project/${data.id}`}>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.img} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/melvintivane" className='button' target='_blank' rel="noreferrer">GitHub</a>
              <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </Link>
      </div>
    </section>
  )
}

export default Portfolio;