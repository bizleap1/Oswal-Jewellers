import React from 'react';
import { Link } from 'react-router-dom';

const SilverArtifacts = () => {
  const reels = [
    {
      id: 1,
      title: "Divine Silver Idols",
      img: "/images/Oj 7.jpeg",
      link: "/collections"
    },
    {
      id: 2,
      title: "Traditional Utensils",
      img: "/images/Oj 3.jpeg",
      link: "/collections"
    },
    {
      id: 3,
      title: "Elegant Decor",
      img: "/images/Oj 5.jpeg",
      link: "/collections"
    },
    {
      id: 4,
      title: "Heritage Artifacts",
      img: "/images/Oj 6.jpeg",
      link: "/collections"
    }
  ];

  return (
    <section id="silver-artifacts" className="silver-artifacts-section section-padding">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <span className="brand-label">OSWAL EXCLUSIVE</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Silver <i>Artifacts</i></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Explore our curated collection of pure silver masterpieces. From divine idols to heritage utensils, 
            each piece tells a story of tradition and fine craftsmanship.
          </p>
        </div>
        
        <div className="reels-grid">
          {reels.map(reel => (
            <div key={reel.id} className="reel-card">
              <Link to={reel.link}>
                <div className="reel-img">
                  <img src={reel.img} alt={reel.title} />
                  <div className="reel-overlay">
                    <i className="fa-brands fa-instagram"></i>
                    <h3>{reel.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* About Us Integration Card */}
          <div className="reel-card about-reel">
            <Link to="/about">
              <div className="reel-img">
                <img src="/images/Oj 2.jpeg" alt="About Oswal Jewellers" />
                <div className="reel-overlay about-overlay">
                  <span className="about-label">SINCE 20+ YEARS</span>
                  <h3>Our Legacy</h3>
                  <p>Discover the journey of Oswal Jewellers</p>
                  <span className="btn-small">Learn More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverArtifacts;
