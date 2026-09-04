'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
    // Parent container controlling the sequential stagger speed
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12, // Gap duration between each line revealing
                delayChildren: 0.1,
            },
        },
    };

    // Animation settings for each individual line of text
    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 18,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.55,
                ease: [0.215, 0.61, 0.355, 1]
            },
        },
    };

    return (
        <section className="w-full bg-[#f4f2ee] dark:bg-black text-black dark:text-white pt-20 pb-20 px-6 sm:px-12 font-mono relative overflow-hidden transition-colors duration-200">
            {/* Background Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 4px)`,
                }}
            />

            <motion.div
                className="max-w-4xl mx-auto relative z-10 space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={containerVariants}
            >
                {/* Header & Main Headline Block */}
                <div className="space-y-6">
                    {/* Tag / Category Header */}
                    <div className="space-y-1">
                        <motion.span
                            variants={lineVariants}
                            className="text-[10px] sm:text-xs font-bold text-red-600 dark:text-red-500 tracking-[0.3em] uppercase block"
                        >
                            ABOUT // ZENJI
                        </motion.span>
                        <motion.div
                            variants={lineVariants}
                            className="w-12 h-[1px] bg-red-600 dark:bg-red-500"
                        />
                    </div>

                    {/* Main Headline - Line-by-Line Reveal */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-[0.88] font-sans text-black dark:text-white flex flex-col">
                        <motion.span variants={lineVariants}>ANIME STREETWEAR</motion.span>
                        <motion.span variants={lineVariants}>AUSTRALIA –</motion.span>
                        <motion.span variants={lineVariants}>BORN FROM THE</motion.span>
                        <motion.span variants={lineVariants}>WARRIOR SPIRIT.</motion.span>
                    </h1>
                </div>

                {/* Body Paragraphs Content Block - Line-by-Line Reveal */}
                <div className="space-y-8 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-zinc-800 dark:text-zinc-300">

                    {/* Paragraph 1 */}
                    <p className="flex flex-col">
                        <motion.span variants={lineVariants}>
                            ZENJI began with one belief: what you wear should tell a story.
                        </motion.span>
                    </p>

                    {/* Paragraph 2 */}
                    <p className="flex flex-col space-y-1">
                        <motion.span variants={lineVariants}>
                            Inspired by samurai discipline, anime art and modern street culture,
                        </motion.span>
                        <motion.span variants={lineVariants}>
                            we create premium streetwear for those who choose their own path.
                        </motion.span>
                    </p>

                    {/* Paragraph 3 */}
                    <p className="flex flex-col space-y-1">
                        <motion.span variants={lineVariants}>
                            Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism
                        </motion.span>
                        <motion.span variants={lineVariants}>
                            and oversized silhouettes to express courage, creativity and individuality.
                        </motion.span>
                    </p>

                    {/* Highlighted Quote Callout Block */}
                    <div className="border-l-2 border-red-600 dark:border-red-500 pl-6 py-1 my-6 italic text-black dark:text-white font-medium flex flex-col space-y-1">
                        <motion.span variants={lineVariants}>
                            ZENJI is more than a name on a shirt. It represents the warrior within,
                        </motion.span>
                        <motion.span variants={lineVariants}>
                            the part of us that keeps moving forward, stays true to itself
                        </motion.span>
                        <motion.span variants={lineVariants}>
                            and refuses to fade into the crowd.
                        </motion.span>
                    </div>

                    {/* Paragraph 4 */}
                    <p className="flex flex-col">
                        <motion.span variants={lineVariants}>
                            We design for the dreamers, fighters, creators and outsiders shaping their own future.
                        </motion.span>
                    </p>

                </div>
            </motion.div>
        </section>
    );
}
