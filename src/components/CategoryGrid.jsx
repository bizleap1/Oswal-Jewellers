import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, title: 'The Bridal Edit', image: '/images/bridal_category.png', size: 'large' },
  { id: 2, title: 'Traditional Gold', image: '/images/gold_category.png', size: 'stacked' },
  { id: 3, title: 'Fine Necklaces', image: '/images/necklace_preview.png', size: 'stacked' },
  { id: 4, title: 'Signature Earrings', image: '/images/earrings_preview.png', size: 'normal' },
  { id: 5, title: 'Eternal Rings', image: '/images/ring_preview.png', size: 'normal' },
  { id: 6, title: 'Modern Bangles', image: '/images/hero_jewelry.png', size: 'normal' },
];

const CategoryGrid = () => {
  return (
    <section className="category-section section-padding">
      <div className="container">
        <h2 className="section-title">Discover Our <i>Craft</i></h2>
        
        <div className="signature-grid">
          {/* Row 1: 7 cols (large) | 5 cols (2 stacked) */}
          <div className="grid-row-top">
            <div className="category-card large">
              <Link to="/collections">
                <div className="card-img">
                  <img src={categories[0].image} alt={categories[0].title} fetchpriority="high" />
                </div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h3>{categories[0].title}</h3>
                  <span>Explore Now</span>
                </div>
              </Link>
            </div>
            
            <div className="grid-column-stacked">
              <div className="category-card stacked">
                <Link to="/collections">
                  <div className="card-img">
                    <img src={categories[1].image} alt={categories[1].title} />
                  </div>
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3>{categories[1].title}</h3>
                  </div>
                </Link>
              </div>
              <div className="category-card stacked">
                <Link to="/collections">
                  <div className="card-img">
                    <img src={categories[2].image} alt={categories[2].title} />
                  </div>
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3>{categories[2].title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: 3 equal cards (4 cols each) */}
          <div className="grid-row-bottom">
            {categories.slice(3).map(cat => (
              <div key={cat.id} className="category-card normal">
                <Link to="/collections">
                  <div className="card-img">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3>{cat.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
