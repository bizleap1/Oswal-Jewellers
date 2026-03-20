import React from 'react';

const TrustStrip = () => {
  const pillars = [
    {
      icon: "fa-solid fa-gem",
      title: "Purity Garanteed",
      desc: "BIS Hallmarked 916 Gold"
    },
    {
      icon: "fa-solid fa-hand-holding-heart",
      title: "Handcrafted Heritage",
      desc: "Each piece tells a unique story"
    },
    {
      icon: "fa-solid fa-shield-check",
      title: "Trusted Legacy",
      desc: "Serving Excellence for 20+ Years"
    }
  ];

  return (
    <section className="trust-strip section-padding">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem' }}>The Craft of <i>Oswal</i></h2>
        </div>
        <div className="trust-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="trust-item animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <i className={item.icon} style={{ fontSize: '2rem', marginBottom: '20px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
