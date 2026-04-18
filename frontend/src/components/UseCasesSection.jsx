import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
    y: 50,
  },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const UseCasesSection = () => {
  const useCases = [
    "Booking System",
    "Order Management",
    "CRM & LEAD TRACKING",
    "Inventory Tracking",
    "Invoice & Billing Tool",
    "Expense Tracking",
    "Supplier Management",
    "Payments Tracking",
    "Project Management",
    "Customer Helpdesk",
  ];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/mountain-ridge-abstract-background-from-sequoia-national-park.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[36px] md:text-[48px] font-bold text-white mb-4"
        >
          What you can build on Evolves
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Give your teams a safe, governed way to build the apps they need,
          while engineering focuses on core systems
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardAnim}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                y: -5,
              }}
              className="bg-white/90 backdrop-blur-md rounded-xl py-4 px-3 
              text-black font-medium shadow-md hover:shadow-xl 
              transition-all duration-300 hover:bg-yellow-400"
            >
              {useCase}
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default UseCasesSection;