'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Mail } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function ContactPage() {
    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white font-mono py-16 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* HEADER SECTION */}
                <MotionDiv
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-2 border-b border-red-600 pb-8"
                >
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                        CONTACT
                    </h1>
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                        WE READ EVERY MESSAGE.
                    </p>
                </MotionDiv>

                {/* MAIN GRID CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN: INFO CARDS */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* SUPPORT CARD */}
                        <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 space-y-4">
                            <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-500 text-xs font-bold tracking-widest uppercase">
                                <Mail size={14} />
                                <span>SUPPORT</span>
                            </div>
                            <h3 className="text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                                SUPPORT@ZENJI.SHOP
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">
                                Orders, returns, sizing questions
                            </p>
                            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider">
                                RESPONSE: 2 BUSINESS DAYS
                            </p>
                            <div className="pt-2">
                                <a
                                    href="mailto:support@zenji.shop"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase transition-all group"
                                >
                                    <span>EMAIL US</span>
                                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* COLLABS CARD */}
                        <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 space-y-4">
                            <h3 className="text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                                COLLABS@ZENJI.SHOP
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Brand deals, creator partnerships, press enquiries
                            </p>
                            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider">
                                RESPONSE: 3-5 BUSINESS DAYS
                            </p>
                            <div className="pt-2">
                                <a
                                    href="mailto:collabs@zenji.shop"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold tracking-widest uppercase transition-all group"
                                >
                                    <span>GET IN TOUCH</span>
                                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* SOCIAL LORE CARD */}
                        <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 space-y-4">
                            <p className="text-red-600 dark:text-red-500 text-xs font-bold tracking-widest uppercase">
                                FOLLOW THE LORE
                            </p>
                            <div className="space-y-3 text-xs tracking-wider">
                                <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-2">
                                    <span className="text-zinc-500 dark:text-zinc-400">INSTAGRAM</span>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-bold hover:text-red-600 transition-colors">
                                        @zenji_.shop
                                    </a>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-2">
                                    <span className="text-zinc-500 dark:text-zinc-400">TIKTOK</span>
                                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="font-bold hover:text-red-600 transition-colors">
                                        @zenji_.shop
                                    </a>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-2">
                                    <span className="text-zinc-500 dark:text-zinc-400">FACEBOOK</span>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="font-bold hover:text-red-600 transition-colors">
                                        ZENJI
                                    </a>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
                                DMs open on Instagram
                            </p>
                        </div>

                    </MotionDiv>

                    {/* RIGHT COLUMN: CONTACT FORM COMPONENT */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </MotionDiv>

                </div>

                {/* BOTTOM HELPFUL LINKS */}
                <div className="pt-12 border-t border-zinc-200 dark:border-zinc-900 space-y-6">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
                        BEFORE YOU EMAIL &mdash;
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase">
                        <Link
                            href="/faq"
                            className="px-6 py-3 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-colors"
                        >
                            FAQ &rarr;
                        </Link>
                        <Link
                            href="/returns"
                            className="px-6 py-3 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-colors"
                        >
                            RETURN POLICY &rarr;
                        </Link>
                        <Link
                            href="/size-guide"
                            className="px-6 py-3 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-colors"
                        >
                            SIZE GUIDE &rarr;
                        </Link>
                        <Link
                            href="/track-order"
                            className="px-6 py-3 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-colors"
                        >
                            TRACK ORDER &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
