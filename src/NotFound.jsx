'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ArrowLeft, Home, Compass } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white flex items-center justify-center p-6 font-mono border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="max-w-xl mx-auto text-center flex flex-col items-center justify-center space-y-6"
            >
                {/* Visual Icon Accent with Ping Effect */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <Compass
                        size={24}
                        strokeWidth={1.5}
                        className="text-red-600 dark:text-red-500 animate-pulse"
                    />
                </div>

                {/* Status Subtitle */}
                <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    ERROR 404 // SIGNAL LOST
                </p>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                    PAGE NOT FOUND
                </h1>

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest max-w-sm leading-relaxed">
                    THE SECTOR YOU ARE LOOKING FOR DOES NOT EXIST OR HAS BEEN MOVED.
                </p>

                {/* Navigation Links */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white hover:border-zinc-900 dark:hover:border-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 group"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        <span>GO BACK</span>
                    </button>

                    {/* Return Home Link */}
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 group"
                    >
                        <Home size={16} />
                        <span>RETURN HOME</span>
                    </Link>
                </div>
            </MotionDiv>
        </main>
    );
}
