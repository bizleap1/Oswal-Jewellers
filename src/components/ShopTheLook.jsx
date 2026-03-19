import React from 'react';

const ShopTheLook = () => {
  return (
    <section className="shop-the-look section-padding">
      <div className="container">
        <div className="look-grid">
          <div className="look-main-img animate-fade-up">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80" alt="Styled Model" />
            
            {/* Hotspots */}
            <div className="hotspot" style={{ top: '30%', left: '50%' }}>
              <div className="hotspot-dot"></div>
              <div className="hotspot-card">
                <span>Diamond Choker</span>
                <p>₹2,45,000</p>
              </div>
            </div>
            
            <div className="hotspot" style={{ top: '45%', left: '42%' }}>
              <div className="hotspot-dot"></div>
              <div className="hotspot-card">
                <span>Gold Studs</span>
                <p>₹45,000</p>
              </div>
            </div>
          </div>
          
          <div className="look-info animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title">Shop the <i>Look</i></h2>
            <p>
              Elevate your bridal ensemble with our curated 'Ethereal Grace' collection. 
              Each piece is designed to complement the other, creating a harmonious aura of luxury.
            </p>
            <button className="btn btn-gold-outline">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
