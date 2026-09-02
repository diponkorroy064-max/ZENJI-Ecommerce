'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for container staggering
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// Animation variants for text & element reveals
const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
};

// Animation variants for the headline scaling
const headlineVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function DropBanner() {
    return (
        <section className="relative w-full h-[75vh] min-h-[500px] flex items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden font-mono border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">

            {/* Background Image Layer with Theme-Aware Opacity & Vignette */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.12, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
            >
                <Image
                    src="/images/drop-hero-bg.jpg"
                    alt="ZENJI Awakening Drop Background"
                    fill
                    priority
                    className="object-cover object-center opacity-20 dark:opacity-30 brightness-90 dark:brightness-75 transition-opacity duration-300"
                />

                {/* Theme-Adaptive Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/40 to-zinc-50/80 dark:from-black dark:via-black/40 dark:to-black/80 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/80 via-transparent to-zinc-50/80 dark:from-black/80 dark:via-transparent dark:to-black/80 transition-colors duration-300" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >

                {/* Top Tagline / Status Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 tracking-widest text-[10px] sm:text-xs text-red-600 font-bold uppercase"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                    </span>
                    <span>INCOMING TRANSMISSION</span>
                </motion.div>

                {/* Dynamic Dual-Color Impact Headline */}
                <motion.h1
                    variants={headlineVariants}
                    className="flex flex-col text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.85] select-none"
                >
                    <span className="text-zinc-900 dark:text-white drop-shadow-sm dark:drop-shadow-md transition-colors duration-300">
                        AWAKENING
                    </span>
                    <span className="text-red-600 drop-shadow-lg">
                        IS LIVE.
                    </span>
                </motion.h1>

                {/* Subtitle Message */}
                <motion.p
                    variants={itemVariants}
                    className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base tracking-widest max-w-lg font-light pt-2 transition-colors duration-300"
                >
                    The next chapter begins. Are you ready?
                </motion.p>

                {/* Drop Release Date */}
                <motion.div
                    variants={itemVariants}
                    className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-500 tracking-[0.3em] uppercase pt-1 font-semibold transition-colors duration-300"
                >
                    DROP DATE: 01 SEPT 2026
                </motion.div>

            </motion.div>
        </section>
    );
}

