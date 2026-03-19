import React from 'react';

const galleryItems = [
  { id: 1, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=2000&q=100', class: 'tall' },
  { id: 2, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=100', class: 'wide' },
  { id: 3, img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=2000&q=100', class: '' },
  { id: 4, img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=2000&q=100', class: '' },
  { id: 5, img: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?auto=format&fit=crop&w=2000&q=100', class: '' },
];

const MasonryGrid = () => {
  return (
    <section className="masonry-section section-padding">
      <div className="container">
        <h2 className="section-title">The <i>Gallery</i></h2>
        <div className="masonry-grid">
          {galleryItems.map(item => (
            <div key={item.id} className={`masonry-item ${item.class}`}>
              <img src={item.img} alt={`Gallery item ${item.id}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGrid;
