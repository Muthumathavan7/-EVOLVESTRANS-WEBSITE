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

const textFade = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const maskTop = {
  hidden: { y: "-100%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const maskBottom = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

const AboutSection = () => {
  return (
    <section className="relative w-full h-[650px] flex items-center overflow-hidden">

      {/* BACKGROUND (DEPTH + DRIFT) */}
      <motion.img
        src="/assets/black-white-energy-signal-particles-network-wave-background-concept-wallpaper-ai-generated-image.jpg"
        alt="Abstract waves"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >

          {/* LEFT TITLE (DUAL MASK AE STYLE) */}
          <div className="overflow-hidden">
            <div className="overflow-hidden">
              <motion.h2
                variants={maskTop}
                className="text-[50px] md:text-[70px] font-bold text-white"
              >
                About Us
              </motion.h2>
            </div>

            {/* <div className="overflow-hidden">
              <motion.h2
                variants={maskBottom}
                className="text-[50px] md:text-[70px] font-bold text-white"
              >
              
              </motion.h2>
            </div> */}
          </div>

          {/* RIGHT CARD */}
          <motion.div
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              rotateY: 3,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            style={{ transformStyle: "preserve-3d" }}
          >

            <motion.p
              variants={textFade}
              className="text-[16px] md:text-[18px] text-gray-200 leading-relaxed mb-6"
            >
              We are an AI-powered website generator designed to transform ideas into fully 
              functional websites within minutes. By simply describing what you need, our 
              platform automatically builds the layout, content, and structure. Eliminating 
              the need for coding or complex design tools.
            </motion.p>

            <motion.p
              variants={textFade}
              className="text-[16px] md:text-[18px] text-gray-200 leading-relaxed"
            >
              Our goal is to make website creation fast, accessible, and scalable for everyone, 
              from individuals to businesses. With intelligent automation and customizable 
              outputs, users can generate, refine, and launch professional websites effortlessly.
            </motion.p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutSection;