"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/Images/conback.jpeg"
        alt="Background"
        fill
        priority
        className="object-cover blur-sm scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6 py-20">
        {/* Left CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <p className="uppercase text-sm tracking-widest mb-3 text-purple-200">
            Ready to Innovate?
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Get Started with Our <br />
            AI Consulting Services{" "}
            <span className="text-purple-400">Today!</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-md leading-relaxed">
            Contact us to learn how our AI experts can help you bring your ideas
            to life. From concept to completion, we are your trusted partner in
            AI innovation.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-8 md:p-10 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Type your message..."
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition shadow-lg"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleReset}
                className="border border-white/40 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
              >
                Reset
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
