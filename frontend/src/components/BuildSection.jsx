import React from 'react';
import '../styles/BuildSection.css';

const BuildSection = () => {
  return (
    <section className="build-section">
      <div className="build-container">
        <div className="build-image">
          <img 
            src="/assets/generative-ai-illustration-webshop-page-furniture-ecommerce-concept.jpg" 
            alt="Build websites and mobile apps" 
          />
        </div>
        <div className="build-content">
          <h2 className="build-title">Build websites and mobile apps</h2>
          <p className="build-description">
            Transform your ideas into fully functional websites and mobile apps with instant 
            deployment, seamless data connections, and powerful scalability
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
