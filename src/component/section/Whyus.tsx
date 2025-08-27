"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$8M+", label: "Money Raised" },
  { value: "400+", label: "Our Clients" },
  { value: "12+", label: "Unicorn Award" },
  { value: "550+", label: "Project Complete" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const WhyUs = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Trusted By */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className="text-gray-500 text-sm md:text-base text-center mb-10"
      >
        Trusted by <span className="font-semibold">400+ Clients</span> and{" "}
        <span className="font-semibold">20 Companies</span>.
      </motion.p>

      {/* Company Logos */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {["starsup", "payscale", "teamtalk", "bestbank", "overlays"].map(
          (logo, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg font-bold text-gray-700 tracking-wide"
            >
              {logo.toUpperCase()}
            </motion.div>
          )
        )}
      </div>

      {/* Purple Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-3xl p-10 md:p-16 max-w-5xl w-full shadow-2xl"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Why Us?
            </motion.h2>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {stat.value}
                  </h3>
                  <p className="text-sm uppercase tracking-wide opacity-80">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            className="text-sm md:text-base opacity-90 leading-relaxed"
          >
            Globally, numerous clients have partnered with us for AI consulting.
            Through their collaboration and our dedicated efforts, we&apos;ve
            earned several prestigious awards.
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-6 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              See All
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUs;
