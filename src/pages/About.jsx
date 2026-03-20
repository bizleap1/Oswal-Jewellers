import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page premium-about">
      {/* Hero Header */}
      <section className="about-hero-section">
        <div className="container">
          <span className="brand-label">ESTABLISHED SINCE 2005</span>
          <h1 className="about-title">The Legacy of <i>Oswal Jewellers</i></h1>
          <div className="title-divider"></div>
        </div>
      </section>

      {/* Our Story / Heritage */}
      <section className="about-intro section-padding">
        <div className="container">
          <div className="editorial-layout">
            <div className="editorial-image animate-fade-up">
              <img src="/images/Oj 7.jpeg" alt="Heritage Collection" />
              <div className="image-caption">Crafting Memories for Two Decades</div>
            </div>
            <div className="editorial-text animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="section-serif">A Tradition of <br /><i>Trust & Quality</i></h2>
              <p>For over 20 years, Oswal Jewellers has been a cornerstone of trust and fine craftsmanship in Pune. Located at the heart of Kasturi Chowk, our showroom has grown from a local gem to a destination for those seeking the finest in gold and silver.</p>
              <p>Our journey began with a simple commitment: to offer every customer a piece of jewelry that isn't just an accessory, but a celebration of life's most precious moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Showroom / Three Floors */}
      <section className="showroom-showcase section-padding" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Three Floors of <i>Excellence</i></h2>
          <div className="floors-grid">
            <div className="floor-card animate-fade-up">
              <div className="floor-number">01</div>
              <div className="floor-info">
                <h3>Gold Jewellery</h3>
                <p>A dazzling array of traditional and contemporary gold pieces crafted in 22kt pure gold.</p>
              </div>
            </div>
            <div className="floor-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="floor-number">02</div>
              <div className="floor-info">
                <h3>Silver Jewellery</h3>
                <p>From elegant everyday wear to statement pieces, our silver collection is one of Pune's largest.</p>
              </div>
            </div>
            <div className="floor-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="floor-number">03</div>
              <div className="floor-info">
                <h3>Silver Artifacts</h3>
                <p>Pure silver idols, utensils, and articles that bring auspiciousness and grace to your home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="vision-section section-padding">
        <div className="container">
          <div className="vision-centered">
            <h2 className="section-serif">Our Commitment to <i>Excellence</i></h2>
            <div className="vision-content">
              <p>At Oswal Jewellers, we believe that true luxury lies in the details. Every diamond is hand-selected, every gold link is precisely joined, and every silver artifact is meticulously finished.</p>
              <p>We invite you to experience our warm hospitality and discover a world where tradition meets modern artistry. Visit us at Kasturi Chowk, Pune, and become a part of our ongoing legacy.</p>
              <Link to="/contact" className="btn btn-gold-outline" style={{ marginTop: '30px' }}>Visit Our Showroom</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
