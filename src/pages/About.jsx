import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="split-section" style={{ marginTop: '40px' }}>
        <div className="split-text">
          <h2>About Us</h2>
          <p>For over 20 years, Oswal Jewellers has been serving customers in Pune with trust, quality, and fine craftsmanship. Located at Kasturi Chowk, our showroom is known for housing one of the largest silver collections in the area.</p>
        </div>
        <div className="split-image">
          <img src="/images/Oj 7.jpeg" alt="Oswal Jewellers Signature Collection" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section className="split-section" style={{ background: 'var(--bg-main)', marginTop: 0 }}>
        <div className="arch-image">
          <img src="/images/Oj 2.jpeg" alt="Exquisite Details" />
        </div>
        <div className="split-text" style={{ alignItems: 'flex-start' }}>
          <h2>Space for Every Choice</h2>
          <p>Our store is thoughtfully spread across three floors, each dedicated to different collections including gold jewellery, silver jewellery, and silver articles. This allows our customers to explore a wide range of designs, from traditional pieces to modern styles, all under one roof.</p>
        </div>
      </section>

      <section className="split-section" style={{ marginTop: 0 }}>
        <div className="split-text">
          <h2>Celebration & Tradition</h2>
          <p>At Oswal Jewellers, we believe jewellery is more than an accessory—it represents tradition, celebration, and lasting memories. Our focus has always been on offering genuine products, elegant designs, and a warm, dependable experience for every customer who walks through our doors.</p>
          <Link to="/collections" className="btn btn-solid" style={{ marginTop: '20px' }}>Explore Our Collections</Link>
        </div>
        <div className="split-image">
          <img src="/images/Oj 1.jpeg" alt="Jewellery Craftsmanship" />
        </div>
      </section>
    </div>
  );
};

export default About;
