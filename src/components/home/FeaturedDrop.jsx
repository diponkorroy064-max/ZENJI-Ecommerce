'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DROP_CARDS = [
    {
        id: 1,
        title: "GOJO INFINITE TEE",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
        rotate: -8,
        xOffset: -40,
        zIndex: 10,
    },
    {
        id: 2,
        title: "BUSHIDO OVERSIZED TEE",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        rotate: -3,
        xOffset: -15,
        zIndex: 20,
    },
    {
        id: 3,
        title: "FREEDOM OVERSIZED TEE",
        image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
        rotate: 3,
        xOffset: 15,
        zIndex: 30,
    },
    {
        id: 4,
        title: "URBAN STREETWEAR TEE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        rotate: 8,
        xOffset: 40,
        zIndex: 40,
    }
];

// Single Card Component with staggered scroll-delay spacing
const ScrollCard = ({ card, index, totalCards, scrollProgress }) => {
    // Spread each image trigger across distinct scroll milestones
    // Card 1 starts at 0.25, Card 2 at 0.42, Card 3 at 0.59, Card 4 at 0.76
    const startRange = 0.25 + (index / totalCards) * 0.52;
    const endRange = startRange + 0.12;

    // Slide up from bottom (+450px) to final position (0px)
    const y = useTransform(scrollProgress, [startRange, endRange], [450, 0]);
    const opacity = useTransform(scrollProgress, [startRange, endRange], [0, 1]);
    const scale = useTransform(scrollProgress, [startRange, endRange], [0.75, 1]);

    return (
        <motion.div
            style={{
                y,
                opacity,
                scale,
                rotate: card.rotate,
                x: card.xOffset,
                zIndex: card.zIndex,
            }}
            className="absolute w-36 sm:w-52 md:w-64 aspect-[3/4] bg-zinc-950 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group rounded-sm"
        >
            <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end">
                <p className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-tight line-clamp-1">
                    {card.title}
                </p>
            </div>
        </motion.div>
    );
};

const FeaturedDrop = () => {
    const containerRef = useRef(null);

    // Track scroll progress along the pinned container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Step 1: Text splits open first (0.05 to 0.22 scroll)
    const leftTextX = useTransform(scrollYProgress, [0.05, 0.22], ["0%", "-85%"]);
    const rightTextX = useTransform(scrollYProgress, [0.05, 0.22], ["0%", "85%"]);

    return (
        /* Expanded container height to 400vh for smooth, deliberate scroll pacing */
        <div ref={containerRef} className="relative h-[400vh] w-full bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300">

            {/* PINNED VIEWPORT */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 px-4 sm:px-8 md:px-12 overflow-hidden">

                {/* SUBHEADER TOP BAR */}
                <div className="max-w-7xl mx-auto w-full z-10">
                    <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
                        <span>COLLECTION</span>
                        <span className="text-zinc-400 dark:text-zinc-600">//</span>
                        <span>THE_ORIGIN_DROP</span>
                    </p>
                </div>

                {/* HERO AREA WITH STAGGERED CARDS */}
                <div className="relative my-auto py-16 w-full max-w-7xl mx-auto flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
                    <div className="relative flex items-center justify-center w-full">

                        {/* LEFT TEXT */}
                        <motion.h1
                            style={{ x: leftTextX }}
                            className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap"
                        >
                            THE
                        </motion.h1>

                        {/* CARDS SLIDING IN ONE BY ONE WITH INTENTIONAL DELAY */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                            <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
                                {DROP_CARDS.map((card, index) => (
                                    <ScrollCard
                                        key={card.id}
                                        card={card}
                                        index={index}
                                        totalCards={DROP_CARDS.length}
                                        scrollProgress={scrollYProgress}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <motion.h1
                            style={{ x: rightTextX }}
                            className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap"
                        >
                            ORIGIN
                        </motion.h1>

                    </div>
                </div>

                {/* FOOTER INDICATOR */}
                <div className="max-w-7xl mx-auto w-full text-center font-mono text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest z-10">
                    [ KEEP SCROLLING TO UNLOCK DROP ITEMS ONE BY ONE ]
                </div>

            </div>
        </div>
    );
};

export default FeaturedDrop;
