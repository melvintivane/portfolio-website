import React from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct user research to understand the target audience, their needs, behaviors, and preferences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop wireframes to outline the basic structure and layout of a digital product, focusing on content placement and navigation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create interactive prototypes that allow stakeholders to test and provide feedback on the user interface and user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Design visually appealing user interfaces that align with brand guidelines and user expectations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuously gather user feedback and insights to refine and improve the user experience.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design and build websites from scratch, tailored to the specific needs and goals of clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide end-to-end development services, handling both front-end and back-end development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize website speed and performance through techniques like code optimization, image compression, and caching.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement security best practices, such as encryption, authentication, and protection against common vulnerabilities (e.g., SQL injection, XSS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate payment gateways, shopping carts, and inventory management systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Offer ongoing maintenance services, including updates, bug fixes, and security patches.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop a content strategy that aligns with the client's goals and target audience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write high-quality articles, blog posts, social media updates, and other written content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize written content for search engines (SEO) to improve visibility and ranking in search results.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitor content performance using analytics tools to track engagement, reach, and conversion metrics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Explore opportunities to monetize content, such as through affiliate marketing, sponsored posts, or selling digital products.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default Services;