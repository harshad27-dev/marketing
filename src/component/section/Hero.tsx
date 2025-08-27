"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform will-change-opacity"
      >
        <Image
          src="/Images/background1.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Optional: dark overlay to prevent white edges showing on blur */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-7xl font-bold text-center leading-tight"
        >
          Explore Innovation with <br />
          <motion.span
            variants={item}
            transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
            className="text-purple-400 inline-block"
          >
            Expert AI Consulting
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-xl text-center max-w-2xl"
        >
          Unlock innovation with our AI consulting. We provide tailored solutions
          to optimize operations and enhance decision-making.
        </motion.p>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Free Consultant
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
