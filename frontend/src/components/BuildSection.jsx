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

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const BuildSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#2b2d31] to-[#1f2023] text-white py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT CONTENT */}
          <motion.div variants={fadeLeft}>

            <motion.h2
              variants={textReveal}
              className="text-[40px] md:text-[64px] font-bold leading-tight mb-6"
            >
              Build websites <br />
              and mobile apps
            </motion.h2>

            <motion.p
              variants={textReveal}
              className="text-gray-300 text-[16px] md:text-[18px] max-w-md"
            >
              Transform your ideas into fully functional websites and mobile apps 
              with instant deployment, seamless data connections, and powerful scalability
            </motion.p>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            className="flex justify-center md:justify-end"
          >

            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,   // subtle 3D feel
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-full max-w-[650px]"
            >

              <motion.img
                src="/assets/generative-ai-illustration-webshop-page-furniture-ecommerce-concept.jpg"
                alt="Build apps"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default BuildSection;