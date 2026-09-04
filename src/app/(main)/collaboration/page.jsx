'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Send, Users, ShieldCheck, Zap } from 'lucide-react';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

export default function CollaborationPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-300 font-sans overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[75vh] flex items-center justify-center px-4 py-20 border-b border-zinc-200 dark:border-zinc-900">
                {/* Background Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, currentColor, currentColor 1px, transparent 1px, transparent 32px)`,
                    }}
                />

                <motion.div
                    className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 dark:text-red-500 font-mono text-xs tracking-widest uppercase">
                        <Sparkles size={14} /> Open Call for Creators
                    </motion.div>

                    <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-mono tracking-tighter">
                        JOIN THE <span className="text-red-600 italic">ZENJI</span> NETWORK
                    </motion.h1>

                    <motion.p variants={fadeUpVariant} className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        We collaborate with digital artists, modern otaku, streetwear stylists, and visionaries who redefine underground culture. Let's create limited-run capsule drops together.
                    </motion.p>

                    <motion.div variants={fadeUpVariant} className="pt-4 flex flex-wrap justify-center gap-4 font-mono text-sm">
                        <a
                            href="#apply"
                            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-md transition-all shadow-md hover:shadow-red-600/20"
                        >
                            Submit Proposal
                        </a>
                        <a
                            href="#ethos"
                            className="px-8 py-3.5 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 font-bold uppercase tracking-widest rounded-md transition-all"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </motion.div>
            </section>


            {/* WHY COLLABORATE SECTION */}
            <section id="ethos" className="py-20 px-4 max-w-6xl mx-auto">
                <motion.div
                    className="space-y-3 mb-16 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUpVariant}
                >
                    <span className="text-xs font-mono text-red-600 tracking-widest uppercase block">Synergy</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-mono uppercase">WHY CO-CREATE WITH US?</h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUpVariant} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 rounded-lg space-y-4">
                        <div className="p-3 w-fit bg-red-600/10 text-red-600 rounded-md">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-mono uppercase">FULL PRODUCTION SUPPORT</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            From 400+ GSM heavyweight cottons to high-precision screen printing, we turn your digital artwork into museum-grade wearable pieces.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 rounded-lg space-y-4">
                        <div className="p-3 w-fit bg-red-600/10 text-red-600 rounded-md">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-mono uppercase">CULT AUDIENCE REACH</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Gain direct exposure to an engaged community of anime enthusiasts, streetwear collectors, and cyber-culture tastemakers across Australia.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 rounded-lg space-y-4">
                        <div className="p-3 w-fit bg-red-600/10 text-red-600 rounded-md">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-mono uppercase">ROYALTY & TRANSPARENCY</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Fair revenue splits for creators with transparent reporting on every limited batch sold out from our database.
                        </p>
                    </motion.div>
                </motion.div>
            </section>


            {/* COLLABORATION CATEGORIES */}
            <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950/40 border-y border-zinc-200 dark:border-zinc-900">
                <div className="max-w-6xl mx-auto space-y-12">
                    <motion.div
                        className="text-center space-y-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                    >
                        <span className="text-xs font-mono text-red-600 tracking-widest uppercase">Disciplines</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono uppercase">WHO WE'RE LOOKING FOR</h2>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { title: "2D/3D Illustrators", desc: "Cyberpunk, mecha, dark fantasy, and anime character design." },
                            { title: "Content Creators", desc: "Unboxing, styling, and aesthetic street photography." },
                            { title: "Typographers", desc: "Kanji customization, brutalist lettering, and tactical graphics." },
                            { title: "Subculture Brands", desc: "Accessories, hardware, and joint capsule drops." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUpVariant}
                                className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-md space-y-2 hover:border-red-600 transition-colors"
                            >
                                <div className="font-mono text-xs text-red-600 font-bold">0{idx + 1}</div>
                                <h3 className="font-mono font-bold uppercase text-lg">{item.title}</h3>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* FORM SECTION */}
            <section id="apply" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.div
                    className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-lg shadow-xl relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                >
                    <div className="space-y-4 text-center mb-10">
                        <span className="text-xs font-mono text-red-600 tracking-widest uppercase">Initiate Contact</span>
                        <h2 className="text-3xl font-extrabold font-mono uppercase">SUBMIT YOUR PROPOSAL</h2>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill out the brief form below and our creative team will reach out in 2-3 business days.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono text-sm">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs uppercase tracking-wider text-zinc-500">Your Name / Handle *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Akira / @cyber_art"
                                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-red-600 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs uppercase tracking-wider text-zinc-500">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@domain.com"
                                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-red-600 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs uppercase tracking-wider text-zinc-500">Portfolio / Social Link *</label>
                            <input
                                type="url"
                                required
                                placeholder="https://instagram.com/yourhandle or ArtStation link"
                                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-red-600 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs uppercase tracking-wider text-zinc-500">Collaboration Concept / Pitch *</label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Tell us briefly about your idea or how you'd like to work with ZENJI..."
                                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-red-600 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-md transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-red-600/20"
                        >
                            SEND TRANSMISSION <Send size={16} />
                        </button>
                    </form>
                </motion.div>
            </section>

        </main>
    );
}

