import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/7664.jpg?v=1.1" alt="Exquisite Floral Necklace Collection" />
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up">
            A Legacy of <br /><i>Timeless <span className="text-gold">Elegance</span></i>
          </h1>
          <div className="title-divider animate-fade-up" style={{ margin: '0 0 30px 0' }}></div>
          <p className="hero-subtitle animate-fade-up">
            Discover our curated collection of fine jewellery, where heritage meets modern artistry in every piece.
          </p>
          <div className="hero-actions animate-fade-up">
            <Link to="/collections" className="btn btn-gold-outline">Explore Collection</Link>
            <Link to="/about" className="btn btn-text" style={{ marginLeft: '30px', color: 'white', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em' }}>OUR STORY <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i></Link>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
