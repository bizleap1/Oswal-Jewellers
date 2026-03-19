import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg animate-zoom">
        <img src="/images/hero_jewelry.png" alt="Premium Jewelry" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-up">A Legacy of <br /><i>Timeless Elegance</i></h1>
        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Discover our curated collection of fine jewellery, where heritage meets modern artistry in every piece.
        </p>
        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/collections" className="btn btn-gold-outline">Explore Collection</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
