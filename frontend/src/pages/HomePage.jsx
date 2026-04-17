import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BuildSection from '../components/BuildSection';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import UseCasesSection from '../components/UseCasesSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <AboutSection />
      <BuildSection />
      <ProcessSection />
      <PricingSection />
      <UseCasesSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
