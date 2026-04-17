import React from 'react';
import { Button } from './ui/button';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <img 
          src="/assets/sky-blue-background-vector-bright-sky-clouds-sunny-day-with-morning-sunlight-winter-daytime-horizon-nature-scenery-afternoon-summer-spring-weather-seasons-illustration-banner.jpg" 
          alt="Sky background" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Build Production Apps with Plain Language
          </h1>
          <p className="hero-description">
            Describe your app idea in plain language. Our AI builds the frontend, backend, 
            and DB automatically—ready to scale instantly.
          </p>
          <Button 
            className="hero-cta-button"
            onClick={scrollToContact}
          >
            Start Building
          </Button>
        </div>
        <div className="hero-image-container">
          <img 
            src="/assets/5568735_2901651_edited.jpg" 
            alt="Website mockup" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
