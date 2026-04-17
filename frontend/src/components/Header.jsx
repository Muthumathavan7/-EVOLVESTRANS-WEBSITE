import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/assets/Evolves Logo/EVOLVESTRANS.png" alt="Evolves Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Plans & Pricing</button>
        </nav>
        <Button 
          className="cta-button"
          onClick={() => scrollToSection('contact')}
        >
          Start Building
        </Button>
      </div>
    </header>
  );
};

export default Header;
