import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import EditorialSection from '../components/EditorialSection';
import MasonryGrid from '../components/MasonryGrid';
import ShopTheLook from '../components/ShopTheLook';
import GiftingSection from '../components/GiftingSection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <EditorialSection />
      <GiftingSection />
      <ShopTheLook />
      <MasonryGrid />
    </div>
  );
};

export default Home;
