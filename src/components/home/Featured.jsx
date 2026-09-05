'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '../shared/ProductCard';
import { COLLECTION_PRODUCTS } from '@/data/products';


const Featured = () => {
    const featuredProducts = COLLECTION_PRODUCTS.slice(0, 6);

    return (
        <section className="w-full py-16 px-6 md:px-12 bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* HEADER MATCHING THE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                    <div className="space-y-1">
                        <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-500 font-semibold uppercase tracking-widest">
                            COLLECTION // THE_ORIGIN_DROP
                        </p>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                            LATEST_DROPS
                        </h2>
                    </div>

                    <Link href="/collection" className="inline-block border border-zinc-900 dark:border-zinc-100 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200">
                        VIEW_ALL
                    </Link>
                </motion.div>

                {/* SINGLE ROW SCROLLABLE CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-200 dark:scrollbar-track-zinc-900 snap-x snap-mandatory">
                    {featuredProducts.map((product, index) => (
                        <div key={product.id || index} className="min-w-[260px] sm:min-w-[300px] max-w-[320px] shrink-0 snap-start">
                            <ProductCard product={product} index={index}/>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Featured;

