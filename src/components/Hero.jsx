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
          <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of fine jewellery, where heritage meets modern artistry in every piece.
          </p>
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/collections" className="btn btn-gold-outline">Explore Collection</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
