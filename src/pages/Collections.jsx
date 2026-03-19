import React from 'react';

const Collections = () => {
  const products = [
    { id: 1, name: 'Ethereal Bloom Ring', img: '/images/ring_preview.png', badge: 'New', rating: '★★★★★' },
    { id: 2, name: 'Imperial Bridal Set', img: '/images/Oj 6.jpeg', rating: '★★★★★' },
    { id: 4, name: 'Vintage Grace Jhumkas', img: '/images/Oj 3.jpeg', rating: '★★★★☆' },
    { id: 5, name: 'Pearl Essence Bracelet', img: '/images/Oj 4.jpeg', rating: '★★★★★' },
    { id: 6, name: 'Royal Kudan Choker', img: '/images/Oj 2.jpeg', rating: '★★★★★' },
    { id: 7, name: 'Signature Gift Set', img: '/images/Oj 7.jpeg', badge: 'Top Rated', rating: '★★★★★' },
    { id: 8, name: 'Starlight Diamond Band', img: '/images/ring_preview.png', rating: '★★★★☆' },
    { id: 9, name: 'Rose Gold Eternity', img: '/images/necklace_preview.png', rating: '★★★★★' },
    { id: 10, name: 'Antique Wedding Jhumkas', img: '/images/bridal_category.png', rating: '★★★★★' },
    { id: 11, name: 'Temple Gold Kada', img: '/images/gold_category.png', rating: '★★★★★' },
    { id: 12, name: 'Diamond Drop Earrings', img: '/images/earrings_preview.png', rating: '★★★★★' },
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
