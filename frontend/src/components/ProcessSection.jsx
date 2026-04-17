import React from 'react';
import '../styles/ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Idea',
      description: 'Input your business logic and UI requirements in natural English. Our AI interprets your idea to map core functionality.'
    },
    {
      number: '02',
      title: 'Generate',
      description: 'Specialized AI agents architect the full stack automatically: frontend, backend, APIs, and a secure database.'
    },
    {
      number: '03',
      title: 'Review',
      description: 'Review the working version with stakeholders and iterate quickly to align on flows and experience'
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'Deploy to production instantly. Our pipeline handles hosting and scaling so your app is ready for users immediately.'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <div className="process-header-image">
            <img 
              src="/assets/ai-generated-IMAGE.jpg" 
              alt="AI Code Generation"
            />
          </div>
        </div>
        
        <h2 className="process-main-title">From Idea to Deployment</h2>
        <p className="process-subtitle">Turn your business concepts into reality with our AI-driven development lifecycle.</p>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
