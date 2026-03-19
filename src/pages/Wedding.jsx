import React from 'react';
import { Link } from 'react-router-dom';

const Wedding = () => {
  const weddingCollections = [
    { id: 1, title: "Grand Bridal Necklaces", img: "/images/Oj 1.jpeg" },
    { id: 2, title: "Royal Polki Sets", img: "/images/Oj 6.jpeg" },
    { id: 3, title: "Maharastrian Thushi", img: "/images/gold_category.png" },
    { id: 4, title: "Designer Mangalsutras", img: "/images/Oj 2.jpeg" }
  ];

  return (
    <div className="wedding-page">
      <div className="page-hero wedding-hero">
        <div className="container">
          <span className="brand-label">OSWAL WEDDING</span>
          <h1>A Forever Kind of <i>Grace</i></h1>
          <p>Every bride deserves a legacy. Our wedding collection is crafted to be passed down through generations.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="wedding-intro">
            <div className="intro-text">
              <h2>Exquisite Bridal <i>Artistry</i></h2>
              <p>From the subtle elegance of a diamond band to the majestic splendor of a heritage necklace, Oswal Jewellers offers a comprehensive bridal suite for every tradition and modern taste.</p>
              <button className="btn btn-gold-outline">Book a Consultation</button>
            </div>
            <div className="intro-img">
              <img src="/images/Oj 6.jpeg" alt="Bridal Set" />
            </div>
          </div>
        </div>
      </section>

      <section className="bridal-grid-section section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container">
          <h2 className="section-title">The Bridal <i>Suite</i></h2>
          <div className="product-grid">
            {weddingCollections.map(item => (
              <div key={item.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <Link to="/collections" className="btn-link">View Collection →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-strip section-padding">
        <div className="container">
          <div className="consult-content">
            <h2>Personalized Wedding <i>Concierge</i></h2>
            <p>Our experts are here to help you select the perfect pieces for your special day. From custom designs to heritage matching.</p>
            <Link to="/contact" className="btn btn-gold-outline">Message our Experts</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
