import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Flame, Shield, Sparkles, Zap } from 'lucide-react';

export const metadata = {
    title: "Our Story — ZENJI Cyber Apparel",
    description: "Born in the neon-lit backstreets. Learn about ZENJI's origins, anime aesthetics, and underground streetwear philosophy.",
};

export default function OurStoryPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-300">

            {/* Hero Section */}
            <section className="relative border-b border-zinc-200 dark:border-zinc-900 px-4 py-20 md:py-32 overflow-hidden">
                {/* Abstract Background Grid Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        GENESIS // ARCHIVE 001
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter italic font-mono mb-6 leading-none">
                        BORN IN THE <span className="text-red-600">STATIC.</span> <br />
                        MADE FOR THE REALM.
                    </h1>

                    <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-light">
                        ZENJI was founded at the intersection of Japanese mecha aesthetic, cyberculture, and heavyweight streetwear architecture. We don't restock. We drop, fade out, and rebuild.
                    </p>
                </div>
            </section>

            {/* Brand Ethos / Stats Bar */}
            <section className="border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/50 py-8 px-4 font-mono">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                    <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 pr-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-red-600">00.1K</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Limited Batches</div>
                    </div>
                    <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 pr-4">
                        <div className="text-2xl sm:text-3xl font-extrabold">100%</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Heavy Cut & Sew</div>
                    </div>
                    <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 pr-4">
                        <div className="text-2xl sm:text-3xl font-extrabold">000</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Restocks Ever</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-red-600">TOKYO</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Design Lab Base</div>
                    </div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold uppercase font-mono tracking-wider border-l-4 border-red-600 pl-4">
                        NO MASS PRODUCTION. NO REPRINTS.
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                        In an era of disposable fast fashion, ZENJI operates on scarcity and precision. Every garment is treated as a piece of functional armor—engineered with 400+ GSM heavyweight cottons, custom cyberpunk typography, and tactical silhouettes.
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans">
                        We pull inspiration from late-90s cyber-anime, dystopian graphic novels, and Tokyo alleyway subcultures. When a drop sells out, the blueprint is permanently archived into the database.
                    </p>
                </div>

                {/* Visual Showcase Card */}
                <div className="relative group">
                    <div className="w-full h-80 sm:h-96 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-lg p-6 flex flex-col justify-between overflow-hidden relative shadow-lg">
                        <div className="flex justify-between items-start font-mono text-xs text-zinc-400">
                            <span>ZENJI_LABS</span>
                            <span className="text-red-600 font-bold">LIMITED EDITION</span>
                        </div>

                        <div className="space-y-2 relative z-10">
                            <span className="font-mono text-xs text-red-600 tracking-widest uppercase">System Operational</span>
                            <h3 className="text-3xl font-extrabold font-mono uppercase italic tracking-tighter">
                                CYBERNETIC STREETWEAR
                            </h3>
                        </div>

                        {/* Subtle Aesthetic Accent */}
                        <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            </section>

            {/* Values / Pillars Grid */}
            <section className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/30 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs font-mono tracking-widest uppercase text-red-600 mb-2">Pillars</h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-mono mb-12">THE ZENJI CODE</h3>

                    <div className="grid sm:grid-cols-3 gap-8">
                        <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-md">
                            <Zap className="text-red-600 mb-4" size={28} />
                            <h4 className="font-mono font-bold uppercase text-lg mb-2">RAW IMPACT</h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Bold graphic language and high-contrast typography designed to stand out in low-light environments.</p>
                        </div>

                        <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-md">
                            <Shield className="text-red-600 mb-4" size={28} />
                            <h4 className="font-mono font-bold uppercase text-lg mb-2">ARMOR GRADE</h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Durable, pre-shrunk heavyweight fabrics built for longevity, comfort, and brutalist streetwear layering.</p>
                        </div>

                        <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-md">
                            <Flame className="text-red-600 mb-4" size={28} />
                            <h4 className="font-mono font-bold uppercase text-lg mb-2">CULT CULTURE</h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Exclusive drops engineered for collectors, gamers, and modern otaku who value true authenticity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="border-t border-zinc-200 dark:border-zinc-900 px-4 py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono tracking-tight">
                        READY FOR THE NEXT DROP?
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 font-sans">
                        Secure your pieces before they enter the vault forever.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/drop"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono text-sm tracking-widest uppercase font-bold rounded-md transition-all shadow-md hover:shadow-red-600/20"
                        >
                            EXPLORE DROPS <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

