'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function WishlistBanner() {
    return (
        <section className="w-full bg-white text-zinc-900 dark:bg-black dark:text-white py-16 px-6 md:px-12 font-mono relative overflow-hidden border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col items-start justify-between gap-8 relative z-10">

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 max-w-2xl"
                >
                    {/* Small Subtitle */}
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                        SAVED // THIS DEVICE
                    </p>

                    {/* Main Header */}
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                        WISHLIST
                    </h1>

                    {/* Description Text */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide">
                        Saved on this device only. Log in and these move to your account, so they follow you everywhere.
                    </p>

                    {/* Action Button Link */}
                    <div className="pt-2">
                        <Link
                            href="/auth/signin"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 underline underline-offset-8 decoration-1 transition-colors group"
                        >
                            LOG IN TO KEEP THEM
                            <span className="inline-block transition-transform group-hover:translate-x-1">
                                &rarr;
                            </span>
                        </Link>
                    </div>
                </MotionDiv>

            </div>
        </section>
    );
}
