import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fieldAnim = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const videoAnim = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2 },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden" id="contact">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP VIDEO BANNER */}
        <motion.div
          variants={videoAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <motion.video
            src="/assets/0_Display_Electronics_1920x1080.mp4"
            autoPlay
            loop
            muted
            playsInline
            whileHover={{ scale: 1.05 }}
            className="w-full h-[300px] md:h-[350px] object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-white text-[28px] md:text-[42px] font-bold mb-6 leading-tight"
            >
              Evolves Your <br /> Business Idea Today
            </motion.h2>

            <motion.div variants={fadeUp}>
              <Button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500">
                Try Evolves
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-6">
              Scale Your Idea Today
            </h2>

            <p className="text-gray-600 text-[16px] max-w-md">
              Inviting SMBs, startups, and developers to bring their app ideas to life.
              Ask us about custom deployment and enterprise plans.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={fieldAnim}>
                <Input
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={fieldAnim}>
                <Input
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </motion.div>
            </div>

            <motion.div variants={fieldAnim}>
              <Input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={fieldAnim}>
              <Textarea
                name="message"
                placeholder="Message *"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div
              variants={fieldAnim}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
                Send Message
              </Button>
            </motion.div>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;