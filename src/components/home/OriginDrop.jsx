'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Mock data matching the tees shown in the video frames
const SLIDE_CARDS = [
    {
        id: '01',
        title: 'WARRIOR SPIRIT TEE',
        subtitle: 'COLLECTION // THE_ORIGIN_DROP',
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        link: '/products/warrior-spirit-tee',
        bgColor: 'bg-zinc-900',
    },
    {
        id: '02',
        title: 'BLUE FLAME TEE',
        subtitle: 'COLLECTION // THE_ORIGIN_DROP',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3',
        link: '/products/blue-flame-tee',
        bgColor: 'bg-blue-950',
    },
    {
        id: '03',
        title: 'DEMON BLOOD TEE',
        subtitle: 'COLLECTION // THE_ORIGIN_DROP',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
        link: '/products/demon-blood-tee',
        bgColor: 'bg-red-950',
    },
    {
        id: '04',
        title: 'WILL OF THE SUN TEE',
        subtitle: 'COLLECTION // THE_ORIGIN_DROP',
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee',
        link: '/products/will-of-the-sun-tee',
        bgColor: 'bg-amber-950',
    },
];

// Individual Sticky Card with Framer Motion scroll transform
const StackedCard = ({ item, index, totalCards }) => {
    const cardRef = useRef(null);

    return (
        <div
            ref={cardRef}
            className="sticky top-20 sm:top-28 mb-12 sm:mb-20"
            style={{ zIndex: index + 1 }}
        >
            <div className="relative w-full overflow-hidden border-2 border-red-600 dark:border-red-500 bg-zinc-950 shadow-2xl rounded-sm">

                {/* Red Top Accent Bar seen in the video header */}
                <div className="h-1 sm:h-2 w-full bg-red-600" />

                {/* Card Main Hero Image */}
                <div className="relative h-[380px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 space-y-2 sm:space-y-4">
                        <p className="font-mono text-xs sm:text-sm text-red-500 font-bold uppercase tracking-widest">
                            {item.subtitle}
                        </p>

                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black font-sans uppercase tracking-tight text-white drop-shadow-md">
                            {item.title}
                        </h3>

                        <div>
                            <Link
                                href={item.link}
                                className="inline-flex items-center gap-2 border border-white/80 bg-black/60 backdrop-blur-md px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                SHOP {item.title} <span className="text-red-500">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OriginDrop = () => {
    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300 py-12 px-4 sm:px-8 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* TOP HEADER SECTION (Exact match from video frame 00:01) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6"
                >
                    <div className="space-y-1">
                        <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-500 font-semibold uppercase tracking-widest">
                            COLLECTION // THE_ORIGIN_DROP
                        </p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                            SALE
                        </h1>
                    </div>

                    <Link
                        href="/collection"
                        className="inline-block border border-zinc-900 dark:border-zinc-100 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                    >
                        VIEW_ALL
                    </Link>
                </motion.div>

                {/* STACKING PARALLAX CARDS CONTAINER */}
                <div className="relative pt-4 pb-24">
                    {SLIDE_CARDS.map((item, index) => (
                        <StackedCard
                            key={item.id}
                            item={item}
                            index={index}
                            totalCards={SLIDE_CARDS.length}
                        />
                    ))}
                </div>

                {/* BOTTOM SECTION HEADER (Matches frame 00:11 in video) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-t border-b border-zinc-200 dark:border-zinc-800 py-8 mt-12"
                >
                    <div className="space-y-1">
                        <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-500 font-semibold uppercase tracking-widest">
                            COLLECTION // THE_ORIGIN_DROP
                        </p>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                            LATEST_DROPS
                        </h2>
                    </div>

                    <Link
                        href="/collection"
                        className="inline-block border border-zinc-900 dark:border-zinc-100 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                    >
                        VIEW_ALL
                    </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default OriginDrop;
