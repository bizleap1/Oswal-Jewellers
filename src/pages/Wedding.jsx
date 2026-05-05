import React from 'react';
import { Link } from 'react-router-dom';

const Wedding = () => {
  const weddingCollections = [
    {
      id: 1,
      title: "Diamond Mangalsutra",
      img: "/images/Diamond Mangalsutra.jpg",
      description: "A masterpiece of brilliance, featuring ethically sourced diamonds set in 18kt gold, symbolizing an eternal bond."
    },
    {
      id: 2,
      title: "Rose Gold Diamond Mangalsutra",
      img: "/images/Rose Gold Diamond Mangalsutra.jpg",
      description: "Modern elegance meets tradition. This rose gold piece features intricate diamond patterns for the contemporary bride."
    },
    {
      id: 3,
      title: "Pearl Mangalsutra",
      img: "/images/Pearl Mangalsutra.jpg",
      description: "Classic and serene. Lustrous pearls combined with traditional black beads and gold for a timeless look."
    },
    {
      id: 4,
      title: "Gold Crescent Mangalsutra",
      img: "/images/Gold Crescent Mangalsutra.jpg",
      description: "A heritage-inspired crescent design in 22kt pure gold, celebrating the beauty of traditional craftsmanship."
    }
  ];

  return (
    <div className="wedding-page">
      <div className="page-hero wedding-hero" style={{
        background: 'linear-gradient(135deg, var(--color-ivory) 0%, #fdfbf7 100%)',
        color: 'var(--color-charcoal)',
        padding: '180px 0 120px',
        textAlign: 'center',
        position: 'relative',
        borderBottom: '1px solid var(--color-beige)'
      }}>
        <div className="hero-pattern-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="brand-label" style={{ color: 'var(--color-gold)', letterSpacing: '0.3em', fontSize: '0.85rem' }}>THE OSWAL BRIDAL SUITE</span>
          <h1 style={{ fontSize: '5.5rem', marginTop: '20px', marginBottom: '30px', fontWeight: 300 }}>A Forever Kind <br/>of <i>Grace</i></h1>
          <div className="title-divider" style={{ margin: '0 auto 30px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
            Every bride deserves a legacy. Our wedding collection is crafted with ethically sourced 
            diamonds and heritage gold to be passed down through generations.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="wedding-intro">
            <div className="intro-text">
              <span className="brand-label">THE ART OF BRIDAL</span>
              <h2>Exquisite Bridal <i>Artistry</i></h2>
              <p>From the subtle elegance of a diamond band to the majestic splendor of a heritage necklace, Oswal Jewellers offers a comprehensive bridal suite for every tradition and modern taste.</p>
              <div className="bridal-features">
                <div className="feature-item">
                  <i className="fa-solid fa-gem"></i>
                  <span>Certified Diamonds</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  <span>Heritage Craftsmanship</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-pencil-ruler"></i>
                  <span>Custom Design Studio</span>
                </div>
              </div>
              <button className="btn btn-gold-outline" style={{ marginTop: '20px' }}>Book a Consultation</button>
            </div>
            <div className="intro-img">
              <img src="/images/Bridal Double Necklace Set.jpg" alt="Bridal Double Necklace Set" />
              <div className="img-overlay-label">Bridal Suite</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bridal-grid-section section-padding" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="brand-label">CURATED SELECTIONS</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>The Bridal <i>Suite</i></h2>
            <div className="title-divider"></div>
          </div>
          <div className="product-grid">
            {weddingCollections.map(item => (
              <div key={item.id} className="product-card premium">
                <div className="product-img-wrapper">
                  <img src={item.img} alt={item.title} />
                  <div className="product-hover-overlay">
                    <button className="btn-small">View Details</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                  <Link to="/contact" className="btn-link">Inquire Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-grid">
            <div className="experience-col">
              <h3>The <i>Legacy</i> Consultation</h3>
              <p>Experience a private, one-on-one session with our master curators to select or design the centerpiece of your wedding ensemble.</p>
              <ul className="exp-list">
                <li>Personalized Style Assessment</li>
                <li>Heritage Metal Sourcing</li>
                <li>3D Design Visualization</li>
              </ul>
            </div>
            <div className="experience-col img-col">
              <img src="/images/Oj 6.jpeg" alt="Experience" className="exp-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-strip section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container">
          <div className="consult-content">
            <span className="brand-label">CONNECT WITH US</span>
            <h2>Personalized Wedding <i>Concierge</i></h2>
            <p>Our experts are here to help you select the perfect pieces for your special day. From custom designs to heritage matching.</p>
            <div className="consult-actions">
              <Link to="/contact" className="btn btn-gold-outline">Message our Experts</Link>
              <a href="tel:8600930308" className="btn-link" style={{ marginLeft: '30px' }}>Call Specialist →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
