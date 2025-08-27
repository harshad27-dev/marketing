"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorksFestival() {
  const steps = [
    {
      title: "Pick a Festival",
      desc: "Choose from Diwali, Holi, Raksha Bandhan and more.",
    },
    {
      title: "Customize Poster",
      desc: "Add your shop logo, name, and CTA.",
    },
    {
      title: "Get Captions & Hashtags",
      desc: "Auto-generated in English + local language.",
    },
    {
      title: "Download & Share",
      desc: "Post directly on WhatsApp, Instagram, or Facebook.",
    },
  ];

  // animation variants
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          How Our{" "}
          <span className="text-purple-500">Festival Marketing Tool</span> Works
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-600 mb-8 max-w-lg"
        >
          Easily create and share professional festival promotions for your
          business in just a few simple steps.
        </motion.p>

        {/* Steps */}
        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-purple-50 border border-purple-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={item}
          className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-purple-600 transition"
        >
          Try It Now
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
      >
        <Image
          src="/Images/works.jpg"
          alt="Festival Marketing Tool Preview"
          width={500}
          height={400}
          className="rounded-xl max-w-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}
