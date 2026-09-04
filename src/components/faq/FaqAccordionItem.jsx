'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-200 dark:border-zinc-900 py-4 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
            >
                <span className={`font-mono text-sm sm:text-base uppercase tracking-wider transition-colors ${isOpen ? 'text-red-600 dark:text-red-500 font-bold' : 'text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500'
                    }`}>
                    {question}
                </span>
                <span className="text-red-600 dark:text-red-500 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pt-3 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed uppercase tracking-wider">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
