'use client';

import { motion } from 'framer-motion';

// Parent container variants for staggered child animations
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

// Item reveal animation
const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
};

// Headline entrance animation
const headlineVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function CollectionBanner() {
    return (
        <section className="relative w-full bg-black dark:bg-black text-black dark:text-white bg-zinc-50 pt-20 pb-8 px-6 lg:px-12 font-mono border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">

            {/* Background Subtle Tech Scanlines */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none z-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 4px)`,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[380px]">

                {/* Main Banner Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    {/* Left Text Block */}
                    <div className="lg:col-span-9 space-y-4">

                        {/* Top Red Sub-Header Tag */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-[0.25em] uppercase"
                        >
                            <span className="h-1.5 w-1.5 bg-red-600 inline-block animate-pulse" />
                            <span>THE_ORIGIN_DROP // COMPLETE ARCHIVE</span>
                        </motion.div>

                        {/* Main Impact Title */}
                        <motion.h1
                            variants={headlineVariants}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] select-none text-black dark:text-white transition-colors duration-300"
                        >
                            ANIME GRAPHIC TEES — <br className="hidden sm:block" />
                            THE FULL COLLECTION
                        </motion.h1>

                        {/* Subtitle Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm tracking-widest font-light pt-2 transition-colors duration-300"
                        >
                            Every drop. Every arc. Documented.
                        </motion.p>
                    </div>

                    {/* Right Giant Number Watermark (10) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="lg:col-span-3 flex justify-start lg:justify-end items-center select-none"
                    >
                        <span className="text-8xl sm:text-[11rem] lg:text-[13rem] font-extrabold leading-none tracking-tighter text-zinc-300/80 dark:text-zinc-900/80 transition-colors duration-300">
                            10
                        </span>
                    </motion.div>
                </motion.div>

                {/* Bottom Technical Metadata Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-12 border-t border-zinc-200 dark:border-zinc-900/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-500 tracking-[0.2em] uppercase font-semibold transition-colors duration-300"
                >
                    <div>
                        10 PIECES // THE_ORIGIN_DROP // EST_2024
                    </div>
                    <div>
                        AUSTRALIA-WIDE SHIPPING
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

