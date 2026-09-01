'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        <section className="w-full bg-[#fafafa] text-black py-20 px-4 sm:px-8 font-mono border-b border-zinc-200 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 space-y-2"
                >
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-[0.25em] uppercase">
                        <span className="h-2 w-2 rounded-full bg-red-600 inline-block animate-pulse" />
                        <span>THE_ORIGIN_DROP // STILL AVAILABLE</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-black">
                        WHILE YOU WAIT.
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-500 tracking-wider font-light">
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
                            className="group relative bg-white border border-zinc-900 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <Link href={product.href} className="block relative flex-1">
                                {/* Diagonal Ribbon Sale Badge */}
                                <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                                    <div className="absolute top-4 -left-10 w-40 bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest -rotate-45 shadow-md">
                                        {product.discount}
                                    </div>
                                </div>

                                {/* Product Image Stage */}
                                <div className="relative w-full aspect-[4/5] bg-zinc-100 overflow-hidden border-b border-zinc-900">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />

                                    {/* Quick View Bar */}
                                    <div className="absolute bottom-0 inset-x-0 bg-black/90 text-white text-xs tracking-widest py-3 px-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <span className="font-bold uppercase">QUICK VIEW</span>
                                        <span className="text-red-500 font-bold">→</span>
                                    </div>
                                </div>

                                {/* Product Meta Details */}
                                <div className="p-4 bg-white flex flex-col justify-between space-y-2">
                                    <h3 className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-black group-hover:text-red-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-400 line-through tracking-wider">
                                            {product.originalPrice}
                                        </span>
                                        <span className="text-xl font-extrabold text-red-600 tracking-tighter">
                                            {product.salePrice}
                                        </span>
                                    </div>
                                </div>
                            </Link>
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
                        className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-black pb-1 border-b-2 border-black hover:text-red-600 hover:border-red-600 transition-colors"
                    >
                        VIEW FULL COLLECTION →
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

