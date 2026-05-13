import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    <nav className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="Oswal Jewellers Home">
            <img src="/images/logo.png" alt="Oswal Jewellers Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'}></i>
        </div>

        <div className={`nav-center ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <img src="/images/logo.png" alt="Oswal Jewellers Logo" className="logo-img" aria-hidden="true" />
            <button className="close-menu" onClick={closeMenu}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <ul className="nav-menu">
            <li className="menu-item"><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li className="menu-item"><NavLink to="/collections" onClick={closeMenu}>Collections</NavLink></li>
            <li className="menu-item"><NavLink to="/wedding" onClick={closeMenu}>Wedding</NavLink></li>
            <li className="menu-item"><NavLink to="/silver-artifacts" onClick={closeMenu}>Silver Artifacts</NavLink></li>
            <li className="menu-item"><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li className="menu-item"><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
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
