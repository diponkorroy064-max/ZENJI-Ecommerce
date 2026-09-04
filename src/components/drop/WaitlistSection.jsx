'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';


export default function WaitlistSection() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            console.log('Submitted email to waitlist:', email);
        }
    };

    return (
        <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-4 transition-colors duration-200">
            <div className="max-w-3xl mx-auto text-center space-y-6">

                {/* Eyebrow Label */}
                <p className="text-red-600 dark:text-red-500 font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                    GET EARLY ACCESS
                </p>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase font-sans text-black dark:text-white">
                    JOIN THE WAITLIST.
                </h2>

                {/* Subtitle Description */}
                <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs sm:text-sm tracking-wider max-w-xl mx-auto leading-relaxed">
                    Be first to shop Awakening. Exclusive early access + pre-drop discount for waitlist members.
                </p>

                {/* Form Input Container */}
                <div className="pt-4 max-w-xl mx-auto">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-0 border border-black dark:border-zinc-800 shadow-sm">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="YOUR EMAIL ADDRESS"
                                required
                                className="w-full bg-transparent px-5 py-4 font-mono text-xs tracking-widest text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none uppercase"
                            />
                            <button
                                type="submit"
                                className="bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 text-white font-sans font-black text-xs md:text-sm tracking-widest uppercase px-8 py-4 flex items-center justify-center gap-2 shrink-0 transition-colors"
                            >
                                <span>JOIN THE WAITLIST</span>
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    ) : (
                        <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 flex items-center justify-center gap-3 text-red-600 dark:text-red-500">
                            <Check size={18} />
                            <span className="font-mono text-xs uppercase tracking-widest font-bold">
                                YOU'RE ON THE LIST. WE'LL BE IN TOUCH SOON.
                            </span>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

