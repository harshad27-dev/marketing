"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu
    const [isPortfolioOpen, setPortfolioOpen] = useState(false); // Desktop dropdown

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Blogs", link: "/blogs" },
        { name: "Contact", link: "/contact" },
    ];

    const portfolioLinks = [
        { name: "Web Projects", link: "/portfolio/web" },
        { name: "Mobile Apps", link: "/portfolio/mobile" },
        { name: "AI Solutions", link: "/portfolio/ai" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto py-4 flex items-center justify-between rounded-b-full px-6">
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center ">
                    <Image
                        src="/logo.svg"
                        alt="Brand Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <span className="text-white text-xl font-bold">Brand</span>
                </motion.div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8 text-white">
                    {navLinks.map((item, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link href={item.link} className="hover:text-purple-400 font-semibold">
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}

                    {/* Portfolio Dropdown - Desktop */}
                    <li className="relative">
                        <button
                            onClick={() => setPortfolioOpen(!isPortfolioOpen)}
                            className="flex items-center gap-1 hover:text-purple-400"
                        >
                            Portfolio <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isPortfolioOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-44 overflow-hidden"
                                >
                                    {portfolioLinks.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={{ backgroundColor: "#f3f4f6" }}
                                            className="px-4 py-2"
                                        >
                                            <Link href={item.link}>{item.name}</Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                </ul>

                {/* CTA Button - Desktop */}
                <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
                    <Link
                        href="/start-project"
                        className="bg-purple-600 border border-purple-600 text-white px-5 py-2 rounded-full hover:bg-white hover:text-purple-600 transition"
                    >
                        Start a Project
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-md text-white px-6 py-4 space-y-4"
                    >
                        {navLinks.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className="block hover:text-purple-400 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Portfolio Dropdown */}
                        <div>
                            <button
                                onClick={() => setPortfolioOpen(!isPortfolioOpen)}
                                className="flex items-center gap-2 hover:text-purple-400"
                            >
                                Portfolio <ChevronDown size={16} />
                            </button>
                            <AnimatePresence>
                                {isPortfolioOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="ml-4 mt-2 space-y-2"
                                    >
                                        {portfolioLinks.map((item, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    href={item.link}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block hover:text-purple-400"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* CTA Button - Mobile */}
                        <Link
                            href="/start-project"
                            className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-white hover:text-purple-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Start a Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
