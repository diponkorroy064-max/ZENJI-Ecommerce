'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '../shared/ProductCard';

const PRODUCTS = [
    {
        id: 'blue-flame-tee',
        name: 'BLUE FLAME TEE',
        originalPrice: 'A$39.99',
        salePrice: 'A$33.99',
        discount: 'SALE 15% OFF',
        image: '/images/products/blue-flame.jpg',
        hoverImage: '/images/products/blue-flame-back.jpg',
        href: '/drop/blue-flame-tee',
    },
    {
        id: 'demon-blood-tee',
        name: 'DEMON BLOOD TEE',
        originalPrice: 'A$39.99',
        salePrice: 'A$33.99',
        discount: 'SALE 15% OFF',
        image: '/images/products/demon-blood.jpg',
        hoverImage: '/images/products/demon-blood-back.jpg',
        href: '/drop/demon-blood-tee',
    },
    {
        id: 'warrior-spirit-tee',
        name: 'WARRIOR SPIRIT TEE',
        originalPrice: 'A$39.99',
        salePrice: 'A$33.99',
        discount: 'SALE 15% OFF',
        image: '/images/products/warrior-spirit.jpg',
        hoverImage: '/images/products/warrior-spirit-back.jpg',
        href: '/drop/warrior-spirit-tee',
    },
    {
        id: 'will-of-the-sun-tee',
        name: 'WILL OF THE SUN TEE',
        originalPrice: 'A$39.99',
        salePrice: 'A$33.99',
        discount: 'SALE 15% OFF',
        image: '/images/products/will-of-sun.jpg',
        hoverImage: '/images/products/will-of-sun-back.jpg',
        href: '/drop/will-of-the-sun-tee',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
};

export default function OriginDropGrid() {
    return (
        <section className="w-full bg-[#fafafa] dark:bg-black text-black dark:text-white py-20 px-4 sm:px-8 font-mono border-t border-b border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-200">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 space-y-2"
                >
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-500 tracking-[0.25em] uppercase">
                        <span className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-500 inline-block animate-pulse" />
                        <span>THE_ORIGIN_DROP // STILL AVAILABLE</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-black dark:text-white font-sans">
                        WHILE YOU WAIT.
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 tracking-wider font-light">
                        Shop The Origin Drop, our current collection.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {PRODUCTS.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="group relative flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-red-950/20 transition-shadow duration-300 border border-transparent dark:border-zinc-900 dark:hover:border-zinc-800 bg-white dark:bg-zinc-950"
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Link Anchor */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        href="/collection"
                        className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-black dark:text-white pb-1 border-b-2 border-black dark:border-white hover:text-red-600 dark:hover:text-red-500 hover:border-red-600 dark:hover:border-red-500 transition-colors"
                    >
                        VIEW FULL COLLECTION →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

