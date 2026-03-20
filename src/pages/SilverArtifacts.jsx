import React from 'react';
import { Link } from 'react-router-dom';

const SilverArtifacts = () => {
  const artifacts = [
    {
      id: 1,
      title: "Divine Silver Idols",
      desc: "Pure silver idols crafted with divine precision, perfect for your home temple or as auspicious gifts.",
      img: "/images/Oj 7.jpeg"
    },
    {
      id: 2,
      title: "Heritage Silver Utensils",
      desc: "Traditional silver dinnerware and utensils, combining health benefits with timeless luxury.",
      img: "/images/Oj 3.jpeg"
    },
    {
      id: 3,
      title: "Exclusive Silver Decor",
      desc: "Modern and traditional silver decorative pieces to add a touch of regality to your living space.",
      img: "/images/Oj 5.jpeg"
    }
  ];

  return (
    <div className="silver-artifacts-page">
      <div className="page-hero silver-hero">
        <div className="container">
          <span className="brand-label">OSWAL EXCLUSIVE</span>
          <h1>Pure Silver <i>Masterpieces</i></h1>
          <p>Discover our range of exquisite silver articles, from divine idols to heritage utensils.</p>
        </div>
      </div>

      <section className="artifacts-list section-padding">
        <div className="container">
          <div className="split-grid">
            {artifacts.map(art => (
              <div key={art.id} className="gift-cat-card">
                <div className="gift-cat-img">
                  <img src={art.img} alt={art.title} />
                </div>
                <div className="gift-cat-info">
                  <h2>{art.title}</h2>
                  <p>{art.desc}</p>
                  <Link to="/contact" className="btn btn-gold-outline">Inquire for Customization</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certified-section section-padding" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
        <div className="container flex-center">
          <div className="certified-content" style={{ textAlign: 'center' }}>
            <span className="badge" style={{ color: 'var(--color-gold)' }}>GUARANTEED PURITY</span>
            <h2 style={{ color: 'white' }}>Certified 92.5 <i>Sterling Silver</i></h2>
            <p>Every piece at Oswal Jewellers comes with a hallmark of purity, ensuring you get the finest silver for your legacy.</p>
            <button className="btn btn-gold-outline">View Certification</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SilverArtifacts;
