import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import '../styles/PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      tagline: 'Get started with essential features at no cost',
      price: 'FREE',
      period: '/ month',
      features: [
        '10 free monthly credits',
        'Unlock all core platform features',
        'Build elegant Web and Mobile experience',
        'Instant access to the most advance models',
        'One-click LLM integration'
      ]
    },
    {
      name: 'Standard',
      tagline: 'Perfect for first-time builders',
      price: 'USD 15',
      period: '/ month',
      features: [
        'Build web & mobile apps',
        'Private project hosting',
        '50 credits per month',
        'Purchase extra credits as needed',
        'GitHub integration',
        'Fork tasks'
      ],
      subtitle: 'Everything in Free, plus:'
    },
    {
      name: 'Pro',
      tagline: 'Built for serious creators and brands',
      price: 'USD 150',
      period: '/ month',
      features: [
        '1M context window',
        'Ultra thinking',
        'System Prompt Edit',
        'Create custom AI agents',
        'High-performance computing',
        '750 Monthly Credits',
        'Priority customer support'
      ],
      subtitle: 'Everything in Standard, plus:'
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="pricing-main-title">Transparent pricing for every builder</h2>
        <p className="pricing-subtitle">
          Choose the plan that fits your building ambitions.<br />
          From weekend projects to enterprise applications, we've got you covered
        </p>
        
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>
              
              <div className="card-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              
              {plan.subtitle && <p className="plan-subtitle">{plan.subtitle}</p>}
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="pricing-button">Try Evolves</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
