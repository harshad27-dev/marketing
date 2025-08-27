"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ConsultingSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Image Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative rounded-2xl overflow-hidden shadow-lg group"
      >
        <Image
          src="/Images/ai.png" // replace with your image
          alt="AI Consulting Team"
          width={600}
          height={500}
          className="object-cover w-full h-[400px] rounded-2xl group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md text-white rounded-xl px-5 py-4 max-w-[70%] sm:max-w-[50%] md:max-w-[40%] border border-white/20 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">See Our Team</h3>
            <p className="text-sm text-gray-200">
              Discover the architectural and design project team with our best
              partners.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 text-black hover:bg-purple-500 hover:text-white transition"
            >
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
          Why Choose Us for Your{" "}
          <span className="text-purple-600">AI Consulting</span> Needs
        </h2>
        <p className="text-gray-600 mb-8">
          Our team of AI specialists uses cutting-edge technology to deliver
          tailor-made solutions. Enhance your business efficiency and innovation
          with our advanced AI consulting services.
        </p>

        {/* Bullet Points */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            "Advanced AI Technology",
            "GPT Model",
            "Extensive Expertise",
            "Precision Matching",
          ].map((point, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              {point}
            </motion.p>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ConsultingSection;
