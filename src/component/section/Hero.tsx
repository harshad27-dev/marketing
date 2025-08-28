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
          src="/Images/background.jpg"
          alt="Festival Background"
          fill
          priority
          className="object-cover blur-md"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
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
          Elevate Your Festival Marketing with <br />
          <motion.span
            variants={item}
            transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
            className="text-yellow-400 inline-block"
          >
            Smart Campaign Tools
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-md text-center max-w-2xl"
        >
          Power Your Festivals with Smarter Marketing.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-md text-center max-w-2xl"
        >
          Plan, promote, and track your festival campaigns with ease. 
          Our toolkit helps you engage audiences, boost ticket sales, 
          and make every celebration unforgettable.
        </motion.p>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
