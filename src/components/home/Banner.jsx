'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Array of 5 high-resolution full-width hero images
const BANNER_IMAGES = [
    'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Loop through images continuously every 5 seconds
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BANNER_IMAGES.length);
        }, 5000);

        return () => clearInterval(imageInterval);
    }, []);


    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black text-white select-none py-12 px-6 sm:px-12 z-50">

            {/* 1. FULL-COVER BACKGROUND CAROUSEL (IMAGES SLIDE FROM LEFT) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: '0%', opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={BANNER_IMAGES[currentImageIndex]}
                            alt={`Zenji Banner Background ${currentImageIndex + 1}`}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* DARK OVERLAY FOR TEXT READABILITY & ATMOSPHERE */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-10" />
            </div>

            {/* 2. BACKGROUND WATERMARK TEXT "ZENJI" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h1 className="text-[22vw] font-black tracking-widest text-white/10 uppercase leading-none">
                    ZENJI
                </h1>
            </div>

            {/* 3. MAIN FOREGROUND CONTENT */}
            <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-20">

                {/* LEFT BRAND TEXT & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 flex flex-col justify-center gap-6 text-left"
                >
                    {/* TAGLINE */}
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                        <span className="text-red-500 font-bold uppercase tracking-widest">
                            @ THE_ORIGIN_DROP
                        </span>
                        <span>//</span>
                        <span className="tracking-widest">LOADING..</span>
                    </div>

                    {/* MAIN TITLE */}
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none max-w-2xl drop-shadow-lg">
                        WEAR YOUR STORY
                    </h2>

                    {/* SHOP CTA BUTTON */}
                    <div className="pt-2">
                        <motion.a
                            href="#shop"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-none transition-all shadow-lg hover:shadow-red-600/50"
                        >
                            SHOP THE DROP
                            <span className="text-lg">→</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
