"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // ✅ You can replace console.log with API call / email integration
  };

  const handleReset = () => setForm({ name: "", email: "", message: "" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/Images/conback.jpeg"
        alt="Contact background"
        fill
        priority
        className="object-cover blur-sm scale-110"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 grid max-w-6xl mx-auto md:grid-cols-2 gap-12 px-6 py-20 items-center">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <p className="uppercase text-sm tracking-widest mb-3 text-purple-300">
            Ready to Innovate?
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Get Started with Our{" "}
            <span className="text-purple-400">AI Consulting</span> Services
          </h1>
          <p className="text-lg text-gray-200 max-w-md leading-relaxed">
            Contact us to discover how our AI experts can bring your ideas to
            life. From concept to completion, we are your trusted partner in
            innovation.
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
            <FormField
              label="Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <FormField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Message */}
            <FormField
              label="Message"
              name="message"
              type="textarea"
              value={form.message}
              onChange={handleChange}
            />

            {/* Actions */}
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

/* ✅ Reusable Input/Textarea Field */
function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label.toLowerCase()}...`}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label.toLowerCase()}`}
          required={required}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      )}
    </div>
  );
}
