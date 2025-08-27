"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                >
                    <Image
                        src="/logo.svg"
                        alt="Brand Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <span className="text-white text-xl font-bold">Brand</span>
                </motion.div>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8 text-white">
                    {["Home", "About Us", "Blogs", "Contact"].map((item, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                                className="hover:text-purple-400 font-semibold"
                            >
                                {item}
                            </Link>
                        </motion.li>
                    ))}

                    {/* Portfolio Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-1 hover:text-purple-400"
                        >
                            Portfolio <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-44 overflow-hidden"
                                >
                                    {[
                                        { name: "Web Projects", link: "/portfolio/web" },
                                        { name: "Mobile Apps", link: "/portfolio/mobile" },
                                        { name: "AI Solutions", link: "/portfolio/ai" }
                                    ].map((item, idx) => (
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

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/start-project"
                        className="bg-transparent border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Start a Project
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
}
