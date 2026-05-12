import React from 'react';

const ShopTheLook = () => {
  return (
    <section className="shop-the-look section-padding">
      <div className="container">
        <div className="look-grid">
          <div className="look-main-img animate-fade-up">
            <img src="/images/Bridal Gold Jewelry Full Set.jpg" alt="Styled Model" />
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
