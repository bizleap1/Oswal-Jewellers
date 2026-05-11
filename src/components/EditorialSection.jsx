import React from 'react';
import { Link } from 'react-router-dom';

const EditorialSection = () => {
  return (
    <section className="editorial-section">
      <div className="editorial-text animate-fade-up">
        <h2>The Art of <br /><i>Purity</i></h2>
        <p>
          Each piece in our collection is a testament to centuries-old craftsmanship, 
          blending heritage designs with contemporary silhouettes for the modern connoisseur.
        </p>
        <Link to="/about" className="btn btn-charcoal" style={{ width: 'fit-content' }}>Read Our Story</Link>
      </div>
      <div className="editorial-img">
        <img 
          src="/images/NakshiTemple Necklace.jpg" 
          alt="Artisanal Craftsmanship" 
        />
      </div>
    </section>
  );
};

export default EditorialSection;
