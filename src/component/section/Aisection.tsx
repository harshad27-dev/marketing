"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "AI Based Chatbot", img: "/template/tp1.jpg" },
  { title: "AI-Powered Online Social Casino Gaming Platform", img: "/template/tp2.jpg" },
  { title: "A Platform for Safe Home Hunting", img: "/template/tp3.jpg" },
  { title: "AI Chatbot-Driven Wellness App", img: "/template/tp4.jpg" },
  { title: "AI-Powered Heat Tape Monitoring System", img: "/template/tp5.jpg" },
  { title: "Smart Touch Lamps", img: "/template/tp6.jpg" },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AIProjects = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
          Revolutionising <span className="text-purple-500">Industries</span>{" "}
          with Top <span className="text-purple-500">AI Projects</span>
        </h2>
        <p className="mt-4 md:mt-0 text-gray-600 max-w-md text-sm md:text-base">
          Explore AI-Powered Projects Uniquely Designed to Meet Your Business
          Needs and Drive Innovation.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={350}
              className="object-cover w-full h-64 rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 rounded-b-2xl">
              <h3 className="text-white font-medium text-base md:text-lg">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AIProjects;
