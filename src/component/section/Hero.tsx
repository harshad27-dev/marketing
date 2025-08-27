"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background with fade-in + zoom effect */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    src="/Images/background1.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover blur-md"
                    priority
                />
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl md:text-7xl font-bold text-center leading-tight"
                >
                    Explore Innovation with <br />{" "}
                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-purple-400 inline-block"
                    >
                        Expert AI Consulting
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="mt-4 text-lg md:text-xl text-center max-w-2xl"
                >
                    Unlock innovation with our AI consulting. We provide tailored solutions to optimize operations
                    and enhance decision-making.
                </motion.p>

                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    Get Free Consultant
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
