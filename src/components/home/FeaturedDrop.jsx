'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const DROP_CARDS = [
    {
        id: 1,
        title: "GOJO INFINITE TEE",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477",
        rotate: -12,
        xOffset: -120,
        zIndex: 10,
    },
    {
        id: 2,
        title: "BUSHIDO OVERSIZED TEE",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        rotate: -4,
        xOffset: -40,
        zIndex: 20,
    },
    {
        id: 3,
        title: "FREEDOM OVERSIZED TEE",
        image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6",
        rotate: 4,
        xOffset: 40,
        zIndex: 30,
    },
    {
        id: 4,
        title: "URBAN STREETWEAR TEE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        rotate: 12,
        xOffset: 120,
        zIndex: 40,
    }
];

// Single Card Component with isolated scroll milestones
const ScrollCard = ({ card, index, scrollProgress }) => {
    // Step 1: Text finishes splitting by 0.20
    // Step 2: Each card enters during its own distinct 0.12 slice of the scroll:
    // Card 0: 0.22 -> 0.34
    // Card 1: 0.38 -> 0.50
    // Card 2: 0.54 -> 0.66
    // Card 3: 0.70 -> 0.82
    const startRange = 0.22 + index * 0.16;
    const endRange = startRange + 0.12;

    // Slide up from +700px below screen to 0px
    const y = useTransform(scrollProgress, [startRange, endRange], [700, 0]);
    const opacity = useTransform(scrollProgress, [startRange, endRange], [0, 1]);
    const scale = useTransform(scrollProgress, [startRange, endRange], [0.65, 1]);

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
            className="absolute w-56 sm:w-80 md:w-96 aspect-3/4 bg-zinc-950 border border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden group rounded-sm cursor-pointer"
        >
            <Image
                width={800}
                height={1000}
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <p className="font-extrabold text-sm sm:text-base text-white uppercase tracking-tight line-clamp-1">
                    {card.title}
                </p>
            </div>
        </motion.div>
    );
};

const FeaturedDrop = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Text splits open and completely clears the screen first (0.02 to 0.20)
    const leftTextX = useTransform(scrollYProgress, [0.02, 0.20], ["0%", "-200%"]);
    const rightTextX = useTransform(scrollYProgress, [0.02, 0.20], ["0%", "200%"]);

    return (
        <div ref={containerRef} className="relative h-[450vh] w-full bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300">

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
                <div className="relative my-auto py-16 w-full max-w-7xl mx-auto flex items-center justify-center min-h-112.5 sm:min-h-150">
                    <div className="relative flex items-center justify-center w-full">

                        {/* LEFT TEXT */}
                        <motion.h1
                            style={{ x: leftTextX }}
                            className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap select-none"
                        >
                            THE
                        </motion.h1>

                        {/* CARDS CONTAINER */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                                {DROP_CARDS.map((card, index) => (
                                    <ScrollCard
                                        key={card.id}
                                        card={card}
                                        index={index}
                                        scrollProgress={scrollYProgress}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <motion.h1
                            style={{ x: rightTextX }}
                            className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap select-none"
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
