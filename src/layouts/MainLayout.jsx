import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingBeacons from '../components/FloatingBeacons';
import useFadeIn from '../hooks/useFadeIn';

const MainLayout = () => {
  useFadeIn(); // Apply scroll animations globally

  return (
    <>
      <CustomCursor />
      <Navbar />
      <FloatingBeacons />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
