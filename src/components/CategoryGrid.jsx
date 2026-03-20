import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, title: 'Gold Jewellery', image: '/images/gold_category.png', size: 'large' },
  { id: 2, title: 'Silver Jewellery', image: '/images/necklace_preview.png', size: 'normal' },
  { id: 3, title: 'Diamond Jewellery', image: '/images/bridal_category.png', size: 'normal' },
];

const CategoryGrid = () => {
  return (
    <section className="category-section section-padding">
      <div className="container">
        <h2 className="section-title">Discover Our <i>Collections</i></h2>
        
        <div className="category-display-grid">
          {categories.map(cat => (
            <div key={cat.id} className={`category-card ${cat.size}`}>
              <Link to="/collections">
                <div className="card-img">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h3>{cat.title}</h3>
                  <span className="explore-btn">Explore Collection →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
