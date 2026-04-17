import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }
    
    // Mock submission
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. We will get back to you soon.'
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Scale Your Idea Today</h2>
          <p className="contact-subtitle">
            Inviting SMBs, startups, and developers to bring their app ideas to life. 
            Ask us about custom deployment and enterprise plans.
          </p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <Input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <Textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={6}
            />
          </div>
          
          <Button type="submit" className="submit-button">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
