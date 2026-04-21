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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const slideIn = (dir) => ({
  hidden: {
    opacity: 0,
    x: dir === "left" ? -60 : 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
});

const logoAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#F5F4F2] py-10 border-t border-gray-200 overflow-hidden">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* TOP GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >

          {/* LOGO */}
          <motion.div variants={logoAnim}>
            <motion.img
              src="/assets/Evolves Logo/EVOLVESTRANS.png"
              alt="Evolves"
              whileHover={{ scale: 1.05 }}
              className="h-40 sm:h-28 md:h-40 lg:h-48 w-auto object-contain"
            />
          </motion.div>

          {/* MALAYSIA */}
          <motion.div variants={slideIn("left")}>
            <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
              Malaysia
            </h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-[13px] leading-relaxed"
            >
              A-G-13A & A-01-13A, Block A,<br />
              Merchant Square, No.1,<br />
              Jalan Tropicana Selatan 1,<br />
              PJU 3,<br />
              47410 Petaling Jaya,<br />
              Selangor Darul Ehsan,<br />
              Malaysia<br />
              Tel: +6018 370 1111
            </motion.p>
          </motion.div>

          {/* SINGAPORE */}
          <motion.div variants={slideIn("right")}>
            <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
              Singapore
            </h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-[13px] leading-relaxed"
            >
              2 Venture Drive #07-06 & #07-01<br />
              (Vision Exchange)<br />
              Singapore 608526<br />
              Tel: 1800 888 6008
            </motion.p>
          </motion.div>

        </motion.div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-end mt-8"
        >
          <p className="text-gray-600 text-[12px]">
            © 2026 Evolves. All rights reserved.
          </p>
        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;