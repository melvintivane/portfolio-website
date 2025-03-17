import React from 'react';
import CV from "../../assets/melvin-tivane-cv-pt.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='button'>Download CV</a>
      <a href="#contact" className='button button-primary'>Let's Talk</a>
    </div>
  )
};

export default CTA;