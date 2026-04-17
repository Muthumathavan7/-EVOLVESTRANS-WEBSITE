import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-background">
        <img 
          src="/assets/black-white-energy-signal-particles-network-wave-background-concept-wallpaper-ai-generated-image.jpg" 
          alt="Abstract waves" 
          className="about-bg-image"
        />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are an AI-powered website generator designed to transform ideas into fully 
          functional websites within minutes. By simply describing what you need, our platform 
          automatically builds the layout, content, and structure. Eliminating the need for 
          coding or complex design tools.
        </p>
        <p className="about-description-secondary">
          Our goal is to make website creation fast, accesible, and scalable for everyone, 
          from individuals to businesses. WIth intelligent automation and customizable outputs, 
          users can generate, refine, and launch professional websites effortlessly
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
