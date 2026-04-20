import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const HeroSection = () => {
  return (
    <section
  id="home"
  className="bg-[#1e1f23] text-white min-h-screen flex items-start overflow-hidden pt-32 md:pt-36"
>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >

            {/* TITLE (MASK REVEAL LIKE AE) */}
            <div className="overflow-hidden">
              <motion.h1
                variants={maskReveal}
                className="text-[42px] md:text-[72px] font-bold leading-[1.05] mb-10 md:mb-12"x
              >
                Build <br />
                Production <br />
                Apps with <br />
                Plain Language
              </motion.h1>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-[17px] max-w-md mb-10 leading-relaxed"
            >
              Describe your app idea in plain language. Our AI builds the frontend,
              backend, and DB automatically—ready to scale instantly.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-medium hover:bg-yellow-500">
                Start Building
              </Button>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center md:justify-end perspective-[1200px]"
          >

            <motion.div
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[560px] rounded-[30px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            >

              {/* PARALLAX BG */}
              <motion.img
                src="/assets/sky-blue-background-vector-bright-sky-clouds-sunny-day-with-morning-sunlight-winter-daytime-horizon-nature-scenery-afternoon-summer-spring-weather-seasons-illustration-banner.jpg"
                alt="Background"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="w-full h-[600px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* FLOATING CARD */}
              <div className="absolute inset-0 flex items-center justify-center px-6">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-[420px] p-5"
                  style={{ transformStyle: "preserve-3d" }}
                >

                  <img
                    src="/assets/5568735_2901651_edited.jpg"
                    alt="Website Mockup"
                    className="w-full rounded-lg"
                  />

                </motion.div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;