import React from "react";
import "./portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Fullstack Ecommerce App",
    img: ecommerce,
    linkGithub: "https://www.github.com/melvintivane/fullstack-ecommerce-app",
    linkDemo: "https://kruppstore.netlify.app",
  },
  {
    id: 2,
    title: "Título 1",
    img: ecommerce,
    linkGithub: "https://www.github.com/melvintivane",
    linkDemo: "https://kruppstore.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <Link to={`/project/${item.id}`} >
              <div className="portfolio__item-image">
                <img src={item.img} alt="" />
              </div>
            <h3>{item.title}</h3>
            </Link>
            <div className="portfolio__item-cta">
              <a
                href={item.linkGithub}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={item.linkDemo}
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
