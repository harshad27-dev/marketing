"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Mock Data
const testimonials = [
  {
    id: 1,
    name: "Jennie",
    role: "CEO | Ador",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Experience the power of comprehensive data analysis at your fingertips, transforming raw information into actionable insights with ease.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Patel",
    role: "Founder | TechFlow",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "This platform completely changed how we scale our business. Super intuitive and powerful!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "CMO | Brandify",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "From automation to insights, everything works seamlessly. Highly recommended!",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // ✅ Auto change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="relative">
        <div className="absolute -top-12 -left-6 text-gray-200 text-[150px] font-bold leading-none pointer-events-none select-none opacity-40">
          &ldquo;
        </div>
        <h2 className="text-4xl md:text-5xl font-bold relative z-10">
          Why customers <span className="text-purple-600">love us</span>
        </h2>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Grow your business, not your headcount. Trusted by founders, startups,
          and enterprises across industries.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full bg-gradient-to-br from-purple-50 to-purple-100/80 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border border-purple-100"
          >
            {/* User profile */}
            <div className="flex items-center mb-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full border-2 border-purple-200"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-base italic leading-relaxed mb-6">
              "{testimonial.review}"
            </p>

            {/* Stars */}
            <div className="flex items-center text-purple-500">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
