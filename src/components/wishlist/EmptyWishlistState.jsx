'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Heart, ArrowRight } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function EmptyWishlistState() {
    return (
        <section className="w-full bg-white text-zinc-900 dark:bg-black dark:text-white py-24 px-6 font-mono border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="max-w-xl mx-auto text-center flex flex-col items-center justify-center space-y-6"
            >
                {/* Visual Icon Accent */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <Heart
                        size={24}
                        strokeWidth={1.5}
                        className="text-red-600 dark:text-red-500 animate-ping"
                    />
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                    NO SAVED PIECES YET
                </h2>

                {/* Subtitle Message */}
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest max-w-sm">
                    TAP THE HEART ON ANY PIECE TO SAVE IT
                </p>

                {/* Action CTA Button */}
                <div className="pt-4">
                    <Link
                        href="/collection"
                        className="inline-flex items-center gap-3 px-8 py-3.5 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 group"
                    >
                        <span>BROWSE THE COLLECTION</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </MotionDiv>
        </section>
    );
}
