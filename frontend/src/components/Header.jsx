import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* 🔥 CSS INSIDE SAME FILE */}
      <style>{`

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(30, 31, 35, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: 0.3s;
        }

        .header.scrolled {
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .header-container {
          max-width: 1200px;
          margin: auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-img {
          height: 150px;
          width: 150px;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          background: none;
          border: none;
          color: #ddd;
          font-size: 15px;
          cursor: pointer;
        }

        .nav-link:hover {
          color: white;
        }

        .cta-button {
          background: #facc15;
          color: black;
          padding: 10px 20px;
          border-radius: 999px;
        }

        /* 🔥 HAMBURGER */
        .hamburger {
          display: none;
          font-size: 26px;
          color: white;
          cursor: pointer;
        }

        /* 🔥 MOBILE MENU */
        .mobile-menu {
          display: none;
        }

        /* ========================= */
        /* 📱 MOBILE ONLY */
        /* ========================= */
        @media (max-width: 768px) {

          .nav {
            display: none; /* hide desktop menu */
          }

          .cta-button {
            display: none; /* hide button */
          }

          .hamburger {
            display: block; /* show ☰ */
          }

          .header-container {
            flex-direction: row;
            justify-content: space-between;
            height: 70px;
            // margin-bottom: 0px;
          }

          .logo-img {
            height: 200px;
            width: 200ox;
            margin-left: -25px;         
            }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: #FFFFFF;
            padding: 20px;
            gap: 10px;
          }

          .mobile-menu button {
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            text-align: left;
          }

          .mobile-btn {
            background: #facc15;
            color: black;
            padding: 10px;
            border-radius: 999px;
          }

        }

      `}</style>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">

          {/* LOGO */}
          <div className="logo">
            <img
              src="/assets/Evolves Logo/EVOLVESTRANS.png"
              alt="Evolves Logo"
              className="logo-img"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Plans & Pricing</button>
          </nav>

          {/* DESKTOP BUTTON */}
          <Button className="cta-button">
            Start Building
          </Button>

          {/* MOBILE HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('features')}>Features</button>
            <button onClick={() => scrollToSection('pricing')}>Plans & Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-btn">
              Start Building
            </button>
          </div>
        )}

      </header>
    </>
  );
};

export default Header;