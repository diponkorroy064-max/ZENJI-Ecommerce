'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { COLLECTION_PRODUCTS } from '@/data/products';

const DROP_CARDS = COLLECTION_PRODUCTS.slice(1, 5);

// card rotation---
const CARD_OFFSETS = [
    { rotate: -12, x: '-30%' },
    { rotate: -4, x: '-10%' },
    { rotate: 4, x: '10%' },
    { rotate: 12, x: '30%' },
];


// Single Card Component---
const ScrollCard = ({ card, index, scrollProgress }) => {
    const startRange = 0.22 + index * 0.16;
    const endRange = startRange + 0.12;

    const targetRotate = card.rotate ?? CARD_OFFSETS[index % 4].rotate;
    const targetX = card.xOffset ?? CARD_OFFSETS[index % 4].x;

    const y = useTransform(scrollProgress, [startRange, endRange], [700, 0]);
    const opacity = useTransform(scrollProgress, [startRange, endRange], [0, 1]);
    const scale = useTransform(scrollProgress, [startRange, endRange], [0.65, 1]);
    const rotate = useTransform(scrollProgress, [startRange, endRange], [0, targetRotate]);


    return (
        <motion.div
            style={{
                y,
                opacity,
                scale,
                rotate,
                x: targetX,
                zIndex: card.zIndex ?? index + 1,
            }}
            className="absolute w-56 sm:w-80 md:w-96 aspect-3/4 bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden group rounded-sm cursor-pointer">

            <Image width={800} height={1000} src={card.imageUrl[0].image} alt={card.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <p className="font-extrabold text-sm sm:text-base text-white uppercase tracking-tight line-clamp-1">
                    {card.name}
                </p>
            </div>
        </motion.div>
    );
};


const FeaturedDrop = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });


    // Text splits open and completely clears---
    const leftTextX = useTransform(scrollYProgress, [0.02, 0.20], ['0%', '-200%']);
    const rightTextX = useTransform(scrollYProgress, [0.02, 0.20], ['0%', '200%']);
    

    return (
        <div ref={containerRef} className="relative h-[450vh] w-full bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300">
            {/* PINNED VIEWPORT */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 px-4 sm:px-8 md:px-12 overflow-hidden">
                {/* SUBHEADER TOP BAR */}
                <div className="max-w-7xl mx-auto w-full z-10">
                    <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
                        <span>COLLECTION</span>
                        <span className="text-zinc-400 dark:text-zinc-600"></span>
                        <span>THE_ORIGIN_DROP</span>
                    </p>
                </div>

                {/* HERO AREA WITH STAGGERED CARDS */}
                <div className="relative my-auto py-16 w-full max-w-7xl mx-auto flex items-center justify-center min-h-112.5 sm:min-h-150">
                    <div className="relative flex items-center justify-center w-full">
                        {/* LEFT TEXT */}
                        <motion.h1 style={{ x: leftTextX }} className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap select-none">
                            THE
                        </motion.h1>

                        {/* CARDS CONTAINER */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                                {DROP_CARDS.map((card, index) => (
                                    <ScrollCard
                                        key={card.id || index}
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
                            className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white z-10 whitespace-nowrap select-none">
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


