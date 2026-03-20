import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import EditorialSection from '../components/EditorialSection';
import MasonryGrid from '../components/MasonryGrid';
import ShopTheLook from '../components/ShopTheLook';
import SilverArtifacts from '../components/SilverArtifacts';
import TrustStrip from '../components/TrustStrip';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <TrustStrip />
      <EditorialSection />
      <SilverArtifacts />
      <ShopTheLook />
      <MasonryGrid />
    </div>
  );
};

export default Home;
