import React from 'react';
import '../styles/UseCasesSection.css';

const UseCasesSection = () => {
  const useCases = [
    'Booking System',
    'Order Management',
    'CRM & LEAD TRACKING',
    'Inventory Tracking',
    'Invoice & Billing Tool',
    'Expense Tracking',
    'Supplier Management',
    'Payments Tracking',
    'Project Management',
    'Customer Helpdesk'
  ];

  return (
    <section className="usecases-section">
      <div className="usecases-container">
        <h2 className="usecases-title">What you can build on Evolves</h2>
        <p className="usecases-subtitle">
          Give your teams a safe, governed way to build the apps they need, while engineering focuses on core systems
        </p>
        
        <div className="usecases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="usecase-card">
              <span>{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
