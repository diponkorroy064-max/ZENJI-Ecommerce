'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLLECTION_PRODUCTS } from '@/data/products';

const SLIDE_CARDS = COLLECTION_PRODUCTS.slice(1, 6);

const StackedCard = ({ item, index }) => {
    const cardRef = useRef(null);

    return (
        <div ref={cardRef} className="sticky top-16 sm:top-24 mb-8 sm:mb-14" style={{ zIndex: index + 1 }}>
            
            <div className="relative w-full max-w-2xl md:max-w-5xl mx-auto overflow-hidden border-2 border-red-600 dark:border-red-500 bg-zinc-950 shadow-2xl rounded-sm">

                {/* Red Top Accent Bar */}
                <div className="h-1 sm:h-1.5 w-full bg-red-600" />

                {/* Card Image Container */}
                <div className="relative h-[45vh] sm:h-[60vh] max-h-140 min-h-75 w-full overflow-hidden">
                    <Image
                        width={600}
                        height={800}
                        src={item.imageUrl[3].image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-1.5 sm:space-y-3">
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-white drop-shadow-md">
                            {item.name}
                        </h3>

                        <div className="pt-1">
                            <Link
                                href={`/collection/${item?.id}`}
                                className="inline-flex items-center gap-2 border border-white/80 bg-black/60 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                SHOP {item.name} <span className="text-red-500">&rarr;</span>
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
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300 py-12 px-4 sm:px-8 md:px-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* TOP HEADER SECTION */}
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
                <div className="relative pt-2 pb-10">
                    {SLIDE_CARDS.map((item, index) => (
                        <StackedCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default OriginDrop;

