import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo-container">
              <img src="/images/logo.png" alt="Oswal Jewellers Logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Jewellers of distinction since 2005. Crafting legacies that last for generations with unmatched purity and trust.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/oswaljewellers_?igsh=dzl0eTd3c3hyOGJ2" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-pinterest"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Our Collections</h4>
            <ul>
              <li><Link to="/collections">Bridal Special</Link></li>
              <li><Link to="/collections">Antique Gold</Link></li>
              <li><Link to="/collections">Signature Silver</Link></li>
              <li><Link to="/collections">Daily Gold</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">Our Legacy</Link></li>
              <li><Link to="/wedding">Bridal Suite</Link></li>
              <li><Link to="/gifting">The Gifting Art</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="footer-col visit-col">
            <h4>Visit Us</h4>
            <div className="address-info">
              <p><strong>Pune Branch:</strong></p>
              <p>Oswal Jewellers, Kasturi Chowk,</p>
              <p>Pune, Maharashtra 411002</p>
              <p className="contact-link"><i className="fa-solid fa-envelope"></i> oswaljewel@gmail.com</p>
              <p className="contact-link"><i className="fa-solid fa-phone"></i> <a href="tel:9767351211">9767351211</a> / <a href="tel:9371704222">9371704222</a></p>
              <div style={{ marginTop: '15px' }}>
                <p className="contact-link"><i className="fa-solid fa-envelope"></i> oswalsilverhouse@gmail.com</p>
                <p className="contact-link"><i className="fa-solid fa-phone"></i> <a href="tel:9607013888">9607013888</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Oswal Jewellers. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
