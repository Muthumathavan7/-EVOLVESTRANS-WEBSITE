import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/Evolves Logo/EVOLVESTRANS.png" alt="Evolves Logo" />
          </div>
          <p className="footer-text">
            © 2025 Evolves. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
