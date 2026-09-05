'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const [isFlashing, setIsFlashing] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Trigger video sequence loops (walking -> flash -> dark shift)
    useEffect(() => {
        const sequenceInterval = setInterval(() => {
            // Step 1: Trigger White Flash
            setIsFlashing(true);

            setTimeout(() => {
                setIsFlashing(false);
                // Step 2: Toggle dark ambient tone
                setIsDarkTheme((prev) => !prev);
            }, 300);

        }, 8000); // repeats every 8s matching video loop

        return () => clearInterval(sequenceInterval);
    }, []);

    return (
        <section
            className={`relative w-full min-h-screen transition-colors duration-1000 overflow-hidden flex items-center justify-center py-12 px-6 sm:px-12 select-none ${isDarkTheme ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-900'
                } dark:bg-zinc-950 dark:text-white`}
        >

            {/* 1. BRIGHT FLASH OVERLAY (00:09 - 00:11 VIDEO EFFECT) */}
            <AnimatePresence>
                {isFlashing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 bg-white z-50 pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* 2. BACKGROUND WATERMARK TEXT "ZENJI" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <h1 className="text-[22vw] font-black tracking-widest text-neutral-300/60 dark:text-zinc-900/80 uppercase leading-none transition-colors duration-700">
                    ZENJI
                </h1>
            </div>

            {/* 3. MAIN CONTENT LAYOUT */}
            <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">

                {/* LEFT BRAND TEXT & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-6 flex flex-col justify-center gap-6 text-left"
                >
                    {/* TAGLINE */}
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 dark:text-neutral-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                        <span className="text-red-600 dark:text-red-500 font-bold uppercase tracking-widest">
                            @ THE_ORIGIN_DROP
                        </span>
                        <span>//</span>
                        <span className="tracking-widest">LOADING..</span>
                    </div>

                    {/* MAIN TITLE */}
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none max-w-xl">
                        WEAR YOUR STORY
                    </h2>

                    {/* SHOP CTA BUTTON */}
                    <div className="pt-2">
                        <motion.a
                            href="#shop"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-none transition-all shadow-lg hover:shadow-red-600/40"
                        >
                            SHOP THE DROP
                            <span className="text-lg">→</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT MEDIA (WALKING ENTRANCE & FLOATING KATANA) */}
                <div className="lg:col-span-6 relative flex justify-center items-center h-[520px] sm:h-[680px] w-full overflow-hidden">

                    {/* MODEL WALKING FORWARD ANIMATION (00:00 - 00:08) */}
                    <motion.div
                        initial={{ scale: 1.25, y: 40, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{
                            duration: 2.2,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                        className="relative w-full max-w-md h-full flex justify-center items-center"
                    >
                        {/* Subtle continuous walking stride motion */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                rotate: [0, 0.5, -0.5, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.2,
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1578632767115-351597cf2477"
                                alt="Zenji Model Walking"
                                fill
                                priority
                                className="object-contain object-center drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>

                    {/* FLOATING KATANA PROP */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            rotate: -28,
                            scale: 1,
                            y: [0, -14, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.8, delay: 0.5 },
                            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute right-2 sm:right-8 bottom-24 w-28 sm:w-40 h-28 sm:h-40 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                            <path d="M10 90 L85 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-zinc-800 dark:text-zinc-200" />
                            <path d="M10 90 L22 78" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-zinc-900 dark:text-zinc-100" />
                            <path d="M22 78 L26 74" stroke="#dc2626" strokeWidth="9" />
                        </svg>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Banner;
