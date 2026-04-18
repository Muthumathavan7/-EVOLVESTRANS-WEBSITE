import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/PricingSection.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    filter: "blur(10px)",
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const featureAnim = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      tagline: "Get started with essential features at no cost",
      price: "FREE",
      period: "/ month",
      features: [
        "10 free monthly credits",
        "Unlock all core platform features",
        "Build elegant Web and Mobile experience",
        "Instant access to the most advance models",
        "One-click LLM integration",
      ],
    },
    {
      name: "Standard",
      tagline: "Perfect for first-time builders",
      price: "USD 15",
      period: "/ month",
      features: [
        "Build web & mobile apps",
        "Private project hosting",
        "50 credits per month",
        "Purchase extra credits as needed",
        "GitHub integration",
        "Fork tasks",
      ],
      subtitle: "Everything in Free, plus:",
    },
    {
      name: "Pro",
      tagline: "Built for serious creators and brands",
      price: "USD 150",
      period: "/ month",
      features: [
        "1M context window",
        "Ultra thinking",
        "System Prompt Edit",
        "Create custom AI agents",
        "High-performance computing",
        "750 Monthly Credits",
        "Priority customer support",
      ],
      subtitle: "Everything in Standard, plus:",
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pricing-main-title"
        >
          Transparent pricing for every builder
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pricing-subtitle"
        >
          Choose the plan that fits your building ambitions.<br />
          From weekend projects to enterprise applications, we've got you covered
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pricing-cards"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardAnim}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="pricing-card"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>

              <div className="card-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              {plan.subtitle && (
                <p className="plan-subtitle">{plan.subtitle}</p>
              )}

              {/* FEATURES */}
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={featureAnim}
                    className="feature-item"
                  >
                    <Check className="check-icon" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* BUTTON */}
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button className="pricing-button">
                  Try Evolves
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;