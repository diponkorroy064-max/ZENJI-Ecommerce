'use client';

import { motion } from 'framer-motion';

export default function LookbookHeroSection() {
    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
        },
    };

    return (
        <section className="w-full bg-[#f4f2ee] dark:bg-black text-black dark:text-white pt-16 pb-8 px-6 sm:px-12 font-mono overflow-hidden relative border-b border-zinc-300 dark:border-zinc-900 transition-colors duration-200">
            {/* Subtle background scanline/grid effect for streetwear aesthetic */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 4px)`,
                }}
            />

            <motion.div
                className="max-w-7xl mx-auto flex flex-col justify-between min-h-[380px] sm:min-h-[420px] relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                    {/* Left Column Text Block */}
                    <div className="max-w-2xl space-y-4">
                        {/* Red Accent Tag */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-red-600 dark:text-red-500 tracking-[0.3em] uppercase"
                        >
                            <span>THE_ORIGIN_DROP // EDITORIAL</span>
                        </motion.div>

                        {/* Bold Display Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9] font-sans text-black dark:text-white"
                        >
                            ANIME STREETWEAR –<br />
                            LOOK<br />
                            BOOK
                        </motion.h1>

                        {/* Subtitle / Caption */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono tracking-wide pt-2"
                        >
                            The Origin Drop. The Full Visual Archive
                        </motion.p>
                    </div>

                    {/* Massive Year Watermark (Background Graphic Text) */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 md:mt-0 select-none pointer-events-none self-end md:self-center"
                    >
                        <span className="text-7xl sm:text-9xl md:text-[180px] font-extrabold tracking-tighter text-zinc-300/60 dark:text-zinc-900/80 font-sans leading-none block">
                            2024
                        </span>
                    </motion.div>
                </div>

                {/* Bottom Bar Details */}
                <motion.div
                    variants={itemVariants}
                    className="pt-10 mt-8 border-t border-zinc-300/80 dark:border-zinc-900 flex flex-row items-center justify-between text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500"
                >
                    <span>10 PIECES // THE_ORIGIN_DROP</span>
                    <span>ANIME STREETWEAR // AUSTRALIA</span>
                </motion.div>
            </motion.div>
        </section>
    );
}

