import React from 'react';

const products = [
  {
    id: 1,
    title: 'Imperial Gold Necklace',
    price: '₹2,45,000',
    img: '/images/NakshiTemple Necklace.jpg'
  },
  {
    id: 2,
    title: 'Heritage Gold Earrings',
    price: '₹85,000',
    img: '/images/Polki Meenakari Chandelier Earrings.jpg'
  },
  {
    id: 3,
    title: 'Diamond Statement Ring',
    price: '₹1,20,000',
    img: '/images/ring_preview.png'
  },
  {
    id: 4,
    title: 'Solid Gold Kada',
    price: '₹5,10,000',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=2000&q=100'
  }
];

const ProductGrid = () => {
  return (
    <section className="product-section section-padding">
      <div className="container">
        <h2 className="section-title">New <i>Arrivals</i></h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="img-main"
                />
                <button className="wishlist-btn" title="Add to Wishlist">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
