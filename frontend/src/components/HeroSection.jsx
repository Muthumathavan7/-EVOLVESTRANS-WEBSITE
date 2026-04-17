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
    </section>
  );
};

export default HeroSection;
