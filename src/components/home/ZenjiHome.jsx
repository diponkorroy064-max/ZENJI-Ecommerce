'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ZenjiHome() {
    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300">

            {/* HERO / ETHOS SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden"
            >
                {/* BACKGROUND IMAGE / OVERLAY */}
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
                    <img
                        src="/assets/zenji-hero.jpg"
                        alt="ZENJI Streetwear Culture"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
                </div>

                {/* METADATA / SUBTITLE */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10"
                >
                    <p className="font-mono text-xs text-red-600 dark:text-red-500 uppercase tracking-widest font-semibold">
                        MANIFESTO_001
                    </p>
                </motion.div>

                {/* MAIN ETHOS DISPLAY */}
                <div className="relative z-10 max-w-2xl my-auto space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-sans tracking-tight leading-none"
                    >
                        THE <span className="text-red-600 dark:text-red-500 block">ZENJI</span> ETHOS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-mono text-xs sm:text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed tracking-wider uppercase max-w-xl"
                    >
                        We exist at the intersection of technical precision and cultural expression. Our garments are engineered for those navigating an increasingly fragmented world, built from Japanese craftsmanship, anime culture and modern Australian streetwear.
                    </motion.p>
                </div>

                {/* FOOTER BAR INSIDE HERO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative z-10 flex justify-between items-end pt-8 border-t border-zinc-200 dark:border-zinc-800"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        DESIGNED IN SYDNEY / TOKYO
                    </span>
                    <span className="font-mono text-xs text-red-600 dark:text-red-500 uppercase tracking-widest font-bold">
                        [ SCROLL TO EXPLORE ]
                    </span>
                </motion.div>
            </motion.section>

            {/* FEATURED CULTURE / COLLECTION SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full py-20 px-6 md:px-12 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 transition-colors"
            >
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-6">
                        <div>
                            <p className="font-mono text-xs text-red-600 dark:text-red-500 uppercase tracking-widest">
                                COLLECTION_PREVIEW
                            </p>
                            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                                BUSHIDO LINE
                            </h2>
                        </div>
                        <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 max-w-xs uppercase">
                            LIMITED EDITION DROPS. NO RESTOCKS. HEAVYWEIGHT COTTON & CUSTOM PRINTS.
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "01", name: "THE ORIGIN HOODIE", price: "A$140.00", desc: "Heavyweight 450GSM French Terry Cotton" },
                            { id: "02", name: "BUSHIDO TEE", price: "A$75.00", desc: "Vintage Washed Oversized Fit" },
                            { id: "03", name: "BLUE FLAME TEE", price: "A$75.00", desc: "Screenprinted Front & Back Artwork" },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-6 space-y-4 hover:border-red-600 dark:hover:border-red-600 transition-colors"
                            >
                                <div className="flex justify-between items-center font-mono text-xs">
                                    <span className="text-red-600 dark:text-red-500 font-bold">{item.id}</span>
                                    <span className="text-zinc-500">{item.price}</span>
                                </div>
                                <div className="aspect-square w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-mono text-xs text-zinc-400 uppercase">
                                    [ PRODUCT IMAGE ]
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-lg uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 uppercase mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

        </div>
    );
}
