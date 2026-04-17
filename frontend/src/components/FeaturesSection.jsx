import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'DEVELOP APPS IN PLAIN LANGUAGE',
      description: 'Simply describe your application idea in natural language. Our system processes your vision to create a complete plan for your production-ready business tool.',
      points: [
        'Auto-Generated Full-Stack: The AI architect builds the entire frontend, scales the backend, sets up the database, and integrates all necessary APIs instantly.',
        'Production-Ready Outputs: Receive fully deployable business apps and professional dashboards designed specifically for SMB operations and internal workflows.',
        'Go from plain language description to live production environment in minutes, not months.'
      ]
    },
    {
      title: 'SCALABLE BUSINESS SOLUTIONS',
      description: 'Our platform handles the technical complexity so you can focus on the business logic that matters most.',
      points: [
        'One-Click Deployment: Push your SMB dashboard or business app to production instantly with managed hosting.',
        'Secure Infrastructure: Your auto-generated backend and database meet modern security standards by default.',
        'Built for production from day one, ensuring your business tools grow as you do.'
      ]
    },
    {
      title: 'A Single workspace for your business',
      description: 'Manage all your tools and workflows in one place. No more switching between platforms. just a simple, organized system that helps your team work faster and stay in control',
      points: [
        'All-in-one website builder: Generate, edit, and manage your entire website from a single AI-powered platform',
        'Beginner-friendly editing: Easily customize layuts, content, and design. no coding or technical skills required.',
        'Create complete websites in minutes with consistent reliable outputs powered by AI'
      ]
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-block">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <div className="feature-points">
              {feature.points.map((point, i) => (
                <p key={i} className="feature-point">{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
