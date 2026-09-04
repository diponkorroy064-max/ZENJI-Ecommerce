'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LookbookCard from './LookbookCard';

const FILTER_TABS = ['ALL', 'FRONT', 'BACK', 'ON MODEL'];

const LOOKBOOK_ITEMS = [
    { id: 'lb-1', image: '/images/products/green-tee-front.jpg', title: 'GREEN TEE // FRONT', tag: 'FRONT', href: '/drop/green-tee' },
    { id: 'lb-2', image: '/images/products/white-luffy-front.jpg', title: 'WILL TEE // FRONT', tag: 'FRONT', href: '/drop/will-tee' },
    { id: 'lb-3', image: '/images/products/teal-demon-front.jpg', title: 'TEAL TEE // FRONT', tag: 'FRONT', href: '/drop/teal-tee' },
    { id: 'lb-4', image: '/images/products/green-model.jpg', title: 'GREEN TEE // MODEL', tag: 'ON MODEL', href: '/drop/green-tee' },
    { id: 'lb-5', image: '/images/products/purple-gojo-front.jpg', title: 'PURPLE TEE // FRONT', tag: 'FRONT', href: '/drop/purple-tee' },
    { id: 'lb-6', image: '/images/products/pink-demon-front.jpg', title: 'PINK TEE // FRONT', tag: 'FRONT', href: '/drop/pink-tee' },
    { id: 'lb-7', image: '/images/products/cream-model.jpg', title: 'CREAM TEE // MODEL', tag: 'ON MODEL', href: '/drop/cream-tee' },
    { id: 'lb-8', image: '/images/products/blue-front.jpg', title: 'BLUE TEE // FRONT', tag: 'FRONT', href: '/drop/blue-tee' },
    { id: 'lb-9', image: '/images/products/cream-front.jpg', title: 'CREAM TEE // FRONT', tag: 'FRONT', href: '/drop/cream-tee' },
    { id: 'lb-10', image: '/images/products/yellow-naruto-front.jpg', title: 'YELLOW TEE // FRONT', tag: 'FRONT', href: '/drop/yellow-tee' },
    { id: 'lb-11', image: '/images/products/yellow-naruto-front.jpg', title: 'YELLOW TEE // FRONT', tag: 'FRONT', href: '/drop/yellow-tee' },
    { id: 'lb-12', image: '/images/products/yellow-naruto-front.jpg', title: 'YELLOW TEE // FRONT', tag: 'FRONT', href: '/drop/yellow-tee' },
];

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

export default function LookbookGridSection() {
    const [activeTab, setActiveTab] = useState('ALL');

    const filteredItems = useMemo(() => {
        if (activeTab === 'ALL') return LOOKBOOK_ITEMS;
        return LOOKBOOK_ITEMS.filter((item) => item.tag === activeTab);
    }, [activeTab]);

    return (
        <section className="w-full bg-[#f4f2ee] dark:bg-black text-black dark:text-white py-12 px-4 sm:px-8 font-mono transition-colors duration-200">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Filter Controls & Image Counter Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-300 dark:border-zinc-800">
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2">
                        {FILTER_TABS.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-zinc-900 dark:border-zinc-700 ${isActive
                                            ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                                            : 'bg-white dark:bg-zinc-900 text-black dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>

                    {/* Image Counter */}
                    <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                        {filteredItems.length} IMAGES
                    </span>
                </div>

                {/* Animated Image Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {filteredItems.map((item) => (
                            <LookbookCard key={item.id} item={item} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Call To Action Banner */}
                <div className="pt-16 pb-8 text-center space-y-6">
                    <p className="text-sm sm:text-base font-mono tracking-wider text-zinc-700 dark:text-zinc-300">
                        Every piece from The Origin Drop, limited stock.
                    </p>
                    <div>
                        <Link
                            href="/collection"
                            className="inline-block bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-10 py-4 transition-colors shadow-lg"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
