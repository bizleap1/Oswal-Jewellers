import React from 'react';

const Collections = () => {
  const products = [
    { id: 1, name: 'Ethereal Bloom Ring', img: '/images/ROH02500.JPG.jpeg', badge: 'New', rating: '★★★★★' },

    { id: 8, name: 'Starlight Diamond Band', img: '/images/ROH02496.JPG.jpeg', rating: '★★★★☆' },
    { id: 9, name: 'Rose Gold Eternity', img: '/images/ROH02491.JPG.jpeg', rating: '★★★★★' },
    { id: 10, name: 'Antique Wedding Jhumkas', img: '/images/ROH02484.JPG.jpeg', rating: '★★★★★' },
    { id: 11, name: 'Temple Gold Kada', img: '/images/ROH02481.JPG.jpeg', rating: '★★★★★' },
    { id: 12, name: 'Diamond Drop Earrings', img: '/images/ROH02297.JPG.jpeg', rating: '★★★★★' },
    { id: 13, name: 'Symphony Choker', img: '/images/ROH02284.JPG.jpeg', rating: '★★★★★' },
    { id: 14, name: 'Lustrous Pearls', img: '/images/ROH02249.JPG.jpeg', rating: '★★★★☆' },
    { id: 15, name: 'Classic Pendants', img: '/images/ROH02229.JPG.jpeg', rating: '★★★★★' },
    { id: 16, name: 'Radiant Bangle', img: '/images/ROH02210 (1).JPG.jpeg', rating: '★★★★★' },
    { id: 17, name: 'Heritage Necklace', img: '/images/ROH01760.JPG', rating: '★★★★★' },
  ];

  return (
    <div className="collections-page">
      <div className="collections-hero">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Explore our signature pieces curated for modern elegance and timeless tradition.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="collections-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card fade-in-up">
                <div className="product-img-wrapper">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <img src={product.img} alt={product.name} />
                  <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-rating">{product.rating}</div>
                  <div className="product-price">By Inquiry</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
