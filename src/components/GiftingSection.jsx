import React from 'react';

const GiftingSection = () => {
  const giftItems = [
    {
      id: 1,
      title: "Silver Coins",
      desc: "Perfect for auspicious occasions, weddings, and corporate gifting. Pure silver coins with divine engravings.",
      img: "/images/Oj 7.jpeg"
    },
    {
      id: 2,
      title: "Gold Pendants",
      desc: "Elegant and timeless tokens of affection. Intricate designs crafted in 22kt pure gold.",
      img: "/images/necklace_preview.png"
    },
    {
      id: 3,
      title: "Gift Vouchers",
      desc: "Unsure of their choice? Let them choose their own piece of legacy with an Oswal Gift Voucher.",
      img: "/images/Oj 5.jpeg"
    }
  ];

  return (
    <section id="gifting" className="gifting-section section-padding">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <span className="brand-label">OSWAL</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>The Art of <i>Gifting</i></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Make every moment memorable with Oswal's curated gifting collection. 
            From precious heirloom pieces to contemporary tokens of love and appreciation.
          </p>
        </div>
        
        <div className="gifting-grid">
          {giftItems.map(item => (
            <div key={item.id} className="gifting-card">
              <div className="gifting-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="gifting-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn-link">Explore Gifts →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
