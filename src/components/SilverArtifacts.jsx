import React from 'react';
import { Link } from 'react-router-dom';

const SilverArtifacts = () => {
  const reels = [
    {
      id: 1,
      title: "Divine Silver Idols",
      img: "/images/silver_ganesha_idol.jpg",
      link: "/collections"
    },
    {
      id: 2,
      title: "Traditional Utensils",
      img: "/images/silver_thali_set.jpg",
      link: "/collections"
    },
    {
      id: 3,
      title: "Elegant Decor",
      img: "/images/silver_diya_collection.jpg",
      link: "/collections"
    },

  ];

  return (
    <section id="silver-artifacts" className="silver-artifacts-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="brand-label">OSWAL EXCLUSIVE</span>
          <h2 className="section-title text-center">Silver <i>Artifacts</i></h2>
          <p className="section-desc">
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


        </div>
      </div>
    </section>
  );
};

export default SilverArtifacts;
