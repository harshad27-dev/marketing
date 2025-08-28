"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const campaigns = [
  { title: "Diwali Lights Festival", img: "/template/fest1.jpg" },
  { title: "Christmas Carnival", img: "/template/fest2.jpg" },
  { title: "Holi Color Bash", img: "/template/fest3.jpg" },
  { title: "Summer Music Fest", img: "/template/fest4.jpg" },
  { title: "Food & Culture Fair", img: "/template/fest5.jpg" },
  { title: "New Year Celebration", img: "/template/fest6.jpg" },
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

const FestivalCampaigns = () => {
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
          Transform Your <span className="text-yellow-500">Festivals</span>{" "}
          with Stunning <span className="text-yellow-500">Campaigns</span>
        </h2>
        <p className="mt-4 md:mt-0 text-gray-600 max-w-md text-sm md:text-base">
          Explore ready-to-use templates and success stories that help you 
          attract audiences, boost ticket sales, and make every festival unforgettable.
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
        {campaigns.map((campaign, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={campaign.img}
              alt={campaign.title}
              width={500}
              height={350}
              className="object-cover w-full h-64 rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 rounded-b-2xl">
              <h3 className="text-white font-medium text-base md:text-lg">
                {campaign.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FestivalCampaigns;
