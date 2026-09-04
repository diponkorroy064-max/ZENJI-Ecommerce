'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DropCountdown() {
    // Target date set to 01 Sept 2026
    const targetDate = new Date('2026-09-01T00:00:00');

    const [timeLeft, setTimeLeft] = useState({
        days: '0',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ days: '0', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);
            const s = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                days: String(d),
                hours: String(h).padStart(2, '0'),
                minutes: String(m).padStart(2, '0'),
                seconds: String(s).padStart(2, '0'),
            });
        };

        calculateTime();
        const timer = setInterval(calculateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    // Framer Motion Stagger Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const timeBoxUnits = [
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MINUTES', value: timeLeft.minutes },
        { label: 'SECONDS', value: timeLeft.seconds },
    ];

    return (
        <section className="w-full bg-[#fcfcfc] dark:bg-black text-black dark:text-white py-20 px-4 font-mono overflow-hidden relative border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
            {/* Background Subtle Scanline Grid Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 4px)`
                }}
            />

            <motion.div
                className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Top Header Tag */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-500 tracking-[0.3em] uppercase mb-10"
                >
                    <span className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-500 inline-block animate-ping" />
                    <span>AWAKENING // IS LIVE</span>
                </motion.div>

                {/* Countdown Grid Container */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-14"
                >
                    {timeBoxUnits.map((unit, index) => (
                        <div key={unit.label} className="flex items-center gap-3 sm:gap-6 md:gap-8">
                            {/* Individual Glowing Card */}
                            <motion.div
                                whileHover={{ scale: 1.04, translateY: -4 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 bg-white dark:bg-zinc-950 border border-red-500/80 dark:border-red-600/60 shadow-[0_0_25px_rgba(239,68,68,0.2)] dark:shadow-[0_0_30px_rgba(220,38,38,0.3)] flex flex-col items-center justify-center p-2 relative"
                            >
                                <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-black dark:text-white">
                                    {unit.value}
                                </span>
                                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-zinc-400 dark:text-zinc-500 font-semibold uppercase mt-2">
                                    {unit.label}
                                </span>
                            </motion.div>

                            {/* Red Divider Colon (Hide after the last box) */}
                            {index < timeBoxUnits.length - 1 && (
                                <span className="text-red-600 dark:text-red-500 font-bold text-xl sm:text-3xl select-none">
                                    :
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Section Headline */}
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black dark:text-white mb-2 font-sans"
                >
                    THE DROP IS COMING
                </motion.h2>

                {/* Date and Location Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-xs sm:text-sm tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-400 font-medium mb-10"
                >
                    01 SEPTEMBER 2026 — AUSTRALIA
                </motion.p>

                {/* Action Button with Framer Hover Animations */}
                <motion.a
                    href="/collection"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 shadow-lg transition-colors"
                >
                    THE WAIT IS OVER – ENTER THE ARCHIVE →
                </motion.a>
            </motion.div>
        </section>
    );
}
