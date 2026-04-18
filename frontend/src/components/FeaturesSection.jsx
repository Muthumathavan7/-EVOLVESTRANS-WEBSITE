import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textAnim = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const imageAnimLeft = {
  hidden: { opacity: 0, x: -100, scale: 1.1 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1 },
  },
};

const imageAnimRight = {
  hidden: { opacity: 0, x: 100, scale: 1.1 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1 },
  },
};

const pointAnim = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const FeaturesSection = () => {
  const features = [
    {
      title: "DEVELOP APPS IN PLAIN LANGUAGE",
      description:
        "Simply describe your application idea in natural language. Our system processes your vision to create a complete plan for your production-ready business tool.",
      points: [
        "Auto-Generated Full-Stack: The AI architect builds the entire frontend, scales the backend, sets up the database, and integrates all necessary APIs instantly.",
        "Production-Ready Outputs: Receive fully deployable business apps and professional dashboards designed specifically for SMB operations and internal workflows.",
        "Go from plain language description to live production environment in minutes, not months.",
      ],
      image:
        "/assets/app-development-concept-person-hand-using-tablet-with-app-development-icon-virtual-screen-background-designing-application-mobile-phone.jpg",
    },
    {
      title: "SCALABLE BUSINESS SOLUTIONS",
      description:
        "Our platform handles the technical complexity so you can focus on the business logic that matters most.",
      points: [
        "One-Click Deployment: Push your SMB dashboard or business app to production instantly with managed hosting.",
        "Secure Infrastructure: Your auto-generated backend and database meet modern security standards by default.",
        "Built for production from day one, ensuring your business tools grow as you do.",
      ],
      image:
        "/assets/chat-with-ai-artificial-intelligence-young-businessman-chatting-with-smart-ai.jpg",
    },
    {
      title: "A SINGLE WORKSPACE FOR YOUR BUSINESS",
      description:
        "Manage all your tools and workflows in one place. No more switching between platforms. Just a simple, organized system that helps your team work faster and stay in control.",
      points: [
        "All-in-one website builder: Generate, edit, and manage your entire website from a single AI-powered platform.",
        "Beginner-friendly editing: Easily customize layouts, content, and design. No coding required.",
        "Create complete websites in minutes with consistent, reliable outputs powered by AI.",
      ],
      image: "/assets/ai-generated-IMAGE.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-[1200px] mx-auto px-6 space-y-24">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center`}
          >

            {/* IMAGE */}
            <motion.div
              variants={index % 2 === 0 ? imageAnimLeft : imageAnimRight}
              whileHover={{ scale: 1.05 }}
              className={`${index % 2 !== 0 ? 'order-2 md:order-2' : ''}`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[260px] md:h-[300px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              variants={textAnim}
              className={`${index % 2 !== 0 ? 'order-1 md:order-1' : ''}`}
            >
              <motion.h3
                variants={textAnim}
                className="text-[18px] font-bold text-gray-900 mb-4"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                variants={textAnim}
                className="text-gray-600 mb-4 leading-relaxed"
              >
                {feature.description}
              </motion.p>

              <div className="space-y-3 text-gray-600 text-[14px]">
                {feature.points.map((point, i) => (
                  <motion.p key={i} custom={i} variants={pointAnim}>
                    {point}
                  </motion.p>
                ))}
              </div>
            </motion.div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;