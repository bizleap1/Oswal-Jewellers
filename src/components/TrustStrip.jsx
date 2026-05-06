import React from 'react';

const TrustStrip = () => {
  const pillars = [
    {
      icon: "fa-solid fa-gem",
      title: "Purity Guaranteed",
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
        <div className="section-header">
          <h2 className="section-title text-center">The Craft of <i>Oswal</i></h2>
        </div>
        <div className="trust-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="trust-item animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
