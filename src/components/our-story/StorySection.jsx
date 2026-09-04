'use client';
import { motion } from 'framer-motion';

const storyData = [
    {
        label: 'WHAT ZENJI IS',
        text: 'ZENJI is an Australian anime streetwear brand.',
    },
    {
        label: 'FOUNDED',
        text: 'ZENJI was founded in 2024.',
    },
    {
        label: 'WHAT WE MAKE',
        text: 'ZENJI makes limited-edition anime-inspired graphic tees in 100% heavyweight 240gsm cotton.',
    },
    {
        label: 'SHIPPING',
        text: 'ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 5-10 business days.',
    },
    {
        label: 'RESTOCKS',
        text: 'ZENJI products are limited edition. There are no restocks, ever — once a piece sells out it is gone for good.',
    },
    {
        label: 'PRICING',
        text: 'ZENJI tees are A$39.99, with selected pieces on sale at A$33.99.',
    },
    {
        label: 'INFLUENCES',
        text: 'ZENJI draws on samurai discipline, Japanese iconography and modern anime art.',
    },
    {
        label: 'BASED IN',
        text: 'ZENJI is based in Australia and ships to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth and Adelaide.',
    },
    {
        label: 'ANIME INSPIRATION',
        text: "ZENJI designs are inspired by series including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball, alongside original samurai artwork. Every design is ZENJI's own — no artwork is licensed from a studio.",
    },
    {
        label: 'NEXT DROP',
        text: 'The Origin Drop is in stock and shipping now, with selected pieces on sale at 15% off.',
    },
];

export default function StorySection() {
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

    const blockVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
        },
    };

    return (
        <section className="w-full bg-[#f4f2ee] dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 font-mono relative overflow-hidden transition-colors duration-200 border-t border-zinc-300 dark:border-zinc-900">
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
                {/* Main Section Header */}
                <motion.h2
                    variants={blockVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter uppercase font-sans text-black dark:text-white border-b border-zinc-300 dark:border-zinc-800 pb-6"
                >
                    ABOUT ZENJI
                </motion.h2>

                {/* Information Blocks */}
                <div className="space-y-10">
                    {storyData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={blockVariants}
                            className="space-y-2 group"
                        >
                            {/* Red Label Tag */}
                            <span className="text-[10px] sm:text-xs font-bold text-red-600 dark:text-red-500 tracking-[0.25em] uppercase block font-mono">
                                {item.label}
                            </span>

                            {/* Main Body Text */}
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-zinc-800 dark:text-zinc-300 font-mono">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

