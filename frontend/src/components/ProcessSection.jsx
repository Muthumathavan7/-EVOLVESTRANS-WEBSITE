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

const maskReveal = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const subtitleAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const cardAnim = {
  hidden: (i) => ({
    opacity: 0,
    rotateY: i % 2 === 0 ? -90 : 90,
    y: 120,
    scale: 0.9,
    filter: "blur(10px)",
  }),
  show: (i) => ({
    opacity: 1,
    rotateY: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const videoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    rotateX: 25,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Describe Your Idea",
      description:
        "Input your business logic and UI requirements in natural English. Our AI interprets your idea to map core functionality.",
    },
    {
      number: "02",
      title: "Generate",
      description:
        "Specialized AI agents architect the full stack automatically: frontend, backend, APIs, and a secure database.",
    },
    {
      number: "03",
      title: "Review",
      description:
        "Review the working version with stakeholders and iterate quickly to align on flows and experience.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Deploy to production instantly. Our pipeline handles hosting and scaling so your app is ready for users immediately.",
    },
  ];

  return (
    <section className="bg-[#2b2d31] text-white py-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* VIDEO */}
        <div className="flex justify-center mb-10 perspective-[1200px]">
          <motion.video
            variants={videoAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            animate={{
              y: [0, -10, 0], // breathing loop
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="/assets/0_Ai_Code_3840x2160.mov"
            autoPlay
            loop
            muted
            playsInline
            whileHover={{
              rotateY: 10,
              scale: 1.05,
            }}
            className="w-[350px] md:w-[450px] rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* TITLE (MASK REVEAL) */}
        <div className="overflow-hidden">
          <motion.h2
            variants={maskReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[36px] md:text-[52px] font-bold mb-4"
          >
            From Idea to Deployment
          </motion.h2>
        </div>

        {/* SUBTITLE */}
        <motion.p
          variants={subtitleAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 mb-14 max-w-2xl mx-auto"
        >
          Turn your business concepts into reality with our AI-driven development lifecycle.
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 perspective-[1200px]"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardAnim}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.07,
              }}
              className="bg-white text-black rounded-2xl p-6 text-left shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[32px] font-bold">
                  {step.number}
                </span>
                <h3 className="text-[18px] font-bold">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-600 text-[14px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default ProcessSection;