'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLLECTION_PRODUCTS } from '@/data/products';
import ProductCard from '../shared/ProductCard';

const CATEGORIES = ['ALL', 'SALE', 'NEW_ARRIVAL', 'LIMITED', 'ZANGETSU'];

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

export default function CollectionGridSection() {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products by category and search keyword
    const filteredProducts = useMemo(() => {
        return COLLECTION_PRODUCTS.filter((product) => {
            const matchesCategory =
                activeCategory === 'ALL' || product.category === activeCategory;
            const matchesSearch = product.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section className="w-full bg-[#faf8f6] dark:bg-black text-black dark:text-white py-10 px-4 sm:px-8 font-mono min-h-screen transition-colors duration-200">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Top Control Bar: Filter Tabs & Search Box */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-zinc-300 dark:border-zinc-800">

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2">
                        {CATEGORIES.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-zinc-900 dark:border-zinc-700 ${isActive
                                            ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                                            : 'bg-white dark:bg-zinc-900 text-black dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Box & Item Count Counter */}
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="relative flex-1 lg:w-64">
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border border-zinc-400 dark:border-zinc-700 px-3 py-2 text-xs font-mono tracking-widest text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-500 uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                            />
                        </div>
                        <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase whitespace-nowrap">
                            {filteredProducts.length} ITEMS
                        </span>
                    </div>

                </div>

                {/* Animated Product Card Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + searchQuery}
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty Search / Filter State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-zinc-500 dark:text-zinc-400 font-mono tracking-widest">
                        NO ITEMS FOUND MATCHING YOUR CRITERIA.
                    </div>
                )}

            </div>
        </section>
    );
}
