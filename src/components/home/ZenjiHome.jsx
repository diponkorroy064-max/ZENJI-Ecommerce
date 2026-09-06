'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function ZenjiHome() {
    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300">
            {/* HERO / ETHOS SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden">
                {/* BACKGROUND IMAGE / OVERLAY */}
                <div className="absolute inset-0 z-0">
                    <Image
                        fill
                        priority
                        src="https://images.unsplash.com/photo-1466547738579-1d108b9afb7c"
                        alt="ZENJI Streetwear Culture"
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    {/* Overlay to ensure high text contrast */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30 dark:from-black/90 dark:via-black/60 dark:to-black/40" />
                </div>

                {/* METADATA / SUBTITLE */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10">
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
                        className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-sans tracking-tight leading-none text-white">
                        THE <span className="text-red-600 dark:text-red-500 block">ZENJI</span> ETHOS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-mono text-xs sm:text-sm md:text-base text-zinc-200 dark:text-zinc-300 leading-relaxed tracking-wider uppercase max-w-xl">
                        We exist at the intersection of technical precision and cultural expression. Our garments are engineered for those navigating an increasingly fragmented world, built from Japanese craftsmanship, anime culture and modern Australian streetwear.
                    </motion.p>
                </div>
            </motion.section>
        </div>
    );
}


