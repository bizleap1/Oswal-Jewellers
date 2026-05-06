import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import EditorialSection from '../components/EditorialSection';
import SilverArtifacts from '../components/SilverArtifacts';
import ShopTheLook from '../components/ShopTheLook';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <EditorialSection />
      <SilverArtifacts />
      <ShopTheLook />
      <Testimonials />
    </div>
  );
};

export default Home;
