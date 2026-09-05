'use client';
import React from 'react';
import { motion } from 'framer-motion';


export default function ZenjiHome() {
    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300 py-10 px-6 sm:px-12 md:px-16 lg:px-20 border-t border-zinc-200 dark:border-zinc-800">

            {/* HERO / ETHOS SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden"
            >
                {/* BACKGROUND IMAGE / OVERLAY */}
                {/* <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
                    <img
                        src="/assets/zenji-hero.jpg"
                        alt="ZENJI Streetwear Culture"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
                </div> */}

                {/* METADATA / SUBTITLE */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10"
                >
                    <p className="font-mono text-xs text-red-600 dark:text-red-500 uppercase tracking-widest font-semibold">
                        MANIFESTO_001
                    </p>
                </motion.div>

                {/* MAIN ETHOS DISPLAY */}
                <div className="relative z-10 max-w-2xl my-auto space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-sans tracking-tight leading-none"
                    >
                        THE <span className="text-red-600 dark:text-red-500 block">ZENJI</span> ETHOS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-mono text-xs sm:text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed tracking-wider uppercase max-w-xl"
                    >
                        We exist at the intersection of technical precision and cultural expression. Our garments are engineered for those navigating an increasingly fragmented world, built from Japanese craftsmanship, anime culture and modern Australian streetwear.
                    </motion.p>
                </div>
            </motion.section>
        </div>
    );
}
