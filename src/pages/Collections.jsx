import React from 'react';

const Collections = () => {
  const products = [
    { id: 1, name: 'Polki Emerald Necklace', img: '/images/Polki Emerald Necklace.jpg', badge: 'Signature', rating: '★★★★★' },
    { id: 2, name: 'Kundan Green Enamel Choker', img: '/images/Kundan Green Enamel Choke.jpg', rating: '★★★★★' },
    { id: 3, name: 'Meenakari Jhumka Earrings', img: '/images/Meenakari Earrings.jpg', badge: 'Classic', rating: '★★★★★' },
    { id: 4, name: 'Polki Meenakari Chandelier', img: '/images/Polki Meenakari Chandelier Earrings.jpg', rating: '★★★★★' },
    { id: 5, name: 'Rose Gold Geometric Set', img: '/images/Rose Gold Geometric Set.jpg', badge: 'Modern', rating: '★★★★☆' },
    { id: 6, name: 'Floral Pink Enamel Bangles', img: '/images/Floral Pink Enamel Bangles.jpg', badge: 'Trending', rating: '★★★★★' },
    { id: 7, name: 'Ruby Triangle Necklace', img: '/images/Rose Gold Ruby Triangle Necklace Set.jpg', rating: '★★★★★' },
    { id: 8, name: 'Geometric Rose Gold Set', img: '/images/Rose gold geometric necklace set.jpg', rating: '★★★★★' },
    { id: 9, name: 'Nakshi Temple Necklace', img: '/images/NakshiTemple Necklace.jpg', badge: 'Heritage', rating: '★★★★★' },
    { id: 10, name: 'Rose Gold Aqua Bangle', img: '/images/Rose Gold Diamond Aqua Bangle.jpg', rating: '★★★★★' },
    { id: 11, name: 'Pear Diamond Bypass Bangles', img: '/images/Rose Gold Pear Diamond Bypass Bangles.jpg', rating: '★★★★★' },
    { id: 12, name: 'Symphony Diamond Choker', img: '/images/ROH02284.JPG.jpeg', rating: '★★★★★' }
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
