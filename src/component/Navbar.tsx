"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Brand Logo" width={32} height={32} />
          <span className="text-xl font-bold">Brand</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Blogs", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="hover:text-purple-600 font-semibold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full Screen Solid Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white text-black flex flex-col z-40"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-center mt-10">
              {["Home", "About Us", "Blogs", "Contact"].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-600 transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}

              {/* Dropdown inside mobile */}
              <li className="w-full">
                <button
                  onClick={() => setIsDropdown(!isDropdown)}
                  className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold hover:text-purple-600 transition"
                >
                  <span>Portfolio</span>
                  <motion.div
                    animate={{ rotate: isDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isDropdown && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden flex flex-col text-base bg-gray-50"
                    >
                      {[
                        { name: "Web Projects", link: "/portfolio/web" },
                        { name: "Mobile Apps", link: "/portfolio/mobile" },
                        { name: "AI Solutions", link: "/portfolio/ai" },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.link}
                            onClick={() => {
                              setIsOpen(false);
                              setIsDropdown(false);
                            }}
                            className="block px-10 py-3 text-gray-700 hover:text-purple-600 transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-auto px-6 pb-10">
              <Link
                href="/start-project"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 transition"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
