import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-text">OSWAL</span>
          </Link>
        </div>

        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>

        <div className={`nav-center ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li className="menu-item has-mega">
              <NavLink to="/collections" onClick={closeMenu}>Jewellery</NavLink>
              <div className="mega-menu">
                <div className="mega-container">
                  <div className="mega-col">
                    <h4>Categories</h4>
                    <ul>
                      <li><NavLink to="/collections" onClick={closeMenu}>Gold Necklace</NavLink></li>
                      <li><NavLink to="/collections" onClick={closeMenu}>Diamond Earrings</NavLink></li>
                      <li><NavLink to="/collections" onClick={closeMenu}>Wedding Rings</NavLink></li>
                      <li><NavLink to="/collections" onClick={closeMenu}>Bangles & Bracelets</NavLink></li>
                    </ul>
                  </div>
                  <div className="mega-col preview">
                    <img src="/images/necklace_preview.png" alt="Necklace" />
                    <span>Fine Necklaces</span>
                  </div>
                  <div className="mega-col preview">
                    <img src="/images/earrings_preview.png" alt="Earrings" />
                    <span>Elegant Earrings</span>
                  </div>
                  <div className="mega-col preview">
                    <img src="/images/ring_preview.png" alt="Ring" />
                    <span>Bridal Special</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="menu-item"><NavLink to="/collections" onClick={closeMenu}>Collections</NavLink></li>
            <li className="menu-item"><NavLink to="/wedding" onClick={closeMenu}>Wedding</NavLink></li>
            <li className="menu-item">
              <NavLink 
                to="/gifting" 
                onClick={(e) => {
                  closeMenu();
                  if (window.location.pathname === '/' && window.location.hash === '#gifting') {
                    e.preventDefault();
                    document.getElementById('gifting')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Gifting
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="nav-icons">
            <button className="icon-btn" title="Wishlist"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
