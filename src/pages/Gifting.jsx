import React from 'react';
import { Link } from 'react-router-dom';

const Gifting = () => {
  const categories = [
    {
      id: 1,
      title: "Personal Milestones",
      desc: "Commemorate birthdays, anniversaries, and personal achievements with timeless gold and diamonds.",
      img: "/images/Oj 1.jpeg"
    },
    {
      id: 2,
      title: "Corporate Excellence",
      desc: "Premium silver articles and coins for partners, employees, and corporate events.",
      img: "/images/Oj 7.jpeg"
    },
    {
      id: 3,
      title: "Festive Joy",
      desc: "Auspicious gifts for Diwali, Akshaya Tritiya, and other holy celebrations.",
      img: "/images/Oj 5.jpeg"
    }
  ];

  return (
    <div className="gifting-page">
      <div className="page-hero gifting-hero">
        <div className="container">
          <span className="brand-label">OSWAL GIFTING</span>
          <h1>Gifts That <i>Tell a Story</i></h1>
          <p>Curated selections for the most meaningful moments in life.</p>
        </div>
      </div>

      <section className="gift-categories section-padding">
        <div className="container">
          <div className="split-grid">
            {categories.map(cat => (
              <div key={cat.id} className="gift-cat-card">
                <div className="gift-cat-img">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <div className="gift-cat-info">
                  <h2>{cat.title}</h2>
                  <p>{cat.desc}</p>
                  <Link to="/contact" className="btn btn-gold-outline">Inquire for Gifting</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="voucher-section section-padding" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
        <div className="container flex-center">
          <div className="voucher-content">
            <span className="badge" style={{ color: 'var(--color-gold)' }}>LUXURY CHOICE</span>
            <h2 style={{ color: 'white' }}>Oswal Gift <i>Vouchers</i></h2>
            <p>Give them the luxury of choice. Our gift vouchers are valid for any piece across our gold, silver, and diamond collections.</p>
            <button className="btn btn-gold-outline">Purchase Voucher</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifting;
