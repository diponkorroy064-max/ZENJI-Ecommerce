'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
    {
        category: "ORDERS & SHIPPING",
        items: [
            {
                question: "Do you ship Australia-wide?",
                answer: "Yes. Free shipping on all orders over A$100, otherwise A$9.99 flat. Standard delivery 5-10 business days."
            },
            {
                question: "Do you ship internationally?",
                answer: "Not yet. Australia only for now. International drops coming Season 03."
            },
            {
                question: "Can I change or cancel my order?",
                answer: "Orders are final once placed. No changes, no cancellations. Every drop is limited."
            },
            {
                question: "How do I track my order?",
                answer: "Tracking link sent via email once dispatched. Check spam if not received."
            }
        ]
    },
    {
        category: "STOCK & DROPS",
        items: [
            {
                question: "When does my order ship?",
                answer: "Every piece is in stock and ships now. Standard delivery 5-10 business days."
            },
            {
                question: "Will sold-out pieces restock?",
                answer: "No restocks. Ever. Once a piece is gone it is gone."
            },
            {
                question: "How long does a sale run?",
                answer: "Until the discounted pieces sell through. No restocks, so the sale ends with the stock."
            }
        ]
    },
    {
        category: "PRODUCTS",
        items: [
            {
                question: "What sizes do you offer?",
                answer: "XS / S / M / L / XL / XXL. Oversized fit – size down if unsure."
            },
            {
                question: "Are the designs limited?",
                answer: "Every piece is limited. No restocks. Once it's gone, it's gone."
            },
            {
                question: "How do I care for my ZENJI tee?",
                answer: "Cold wash inside out. No tumble dry. Hang dry only. Iron inside out low heat."
            },
            {
                question: "What material are the tees?",
                answer: "100% heavyweight cotton 240gsm. Oversized streetwear cut."
            }
        ]
    },
    {
        category: "RETURNS & REFUNDS",
        items: [
            {
                question: "Do you accept returns?",
                answer: "We accept returns on unworn, unwashed items within 14 days of delivery. Sale items are final sale – no change-of-mind returns."
            },
            {
                question: "My item arrived damaged – what do I do?",
                answer: "Email support@zenji.shop with order number + photo. We'll sort it."
            },
            {
                question: "How long do refunds take?",
                answer: "5-10 business days after we receive the return."
            }
        ]
    },
    {
        category: "BRAND",
        items: [
            {
                question: "What is ZENJI?",
                answer: "ZENJI is an Australian anime-inspired streetwear brand founded in 2024, creating limited-edition graphic tees inspired by Japanese culture, samurai discipline and anime art."
            },
            {
                question: "Where does ZENJI ship?",
                answer: "ZENJI ships Australia-wide. Free shipping on orders over A$100. Standard delivery is 5-10 business days."
            },
            {
                question: "Does ZENJI restock products?",
                answer: "No. All ZENJI drops are limited edition. No restocks. Ever. Once a piece sells out it is gone for good."
            },
            {
                question: "What anime series does ZENJI draw inspiration from?",
                answer: "ZENJI draws on Japanese culture, samurai tradition and modern anime art. The Origin Drop designs include Blue Flame, Bushido, Demon Blood, Domain Expansion, Water Breathing and Limitless."
            },
            {
                question: "How much do ZENJI products cost?",
                answer: "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99. Free shipping on orders over A$100."
            },
            {
                question: "Where is ZENJI based?",
                answer: "Australia. Built for those who wear their story."
            },
            {
                question: "How do I stay updated on new drops?",
                answer: "Follow @zenji_.shop on Instagram and @zenji_.shop on TikTok. Join the waitlist on the Drop page."
            },
            {
                question: "Can I collaborate with ZENJI?",
                answer: "Email us at collabs@zenji.shop."
            }
        ]
    }
];

export default function FaqPage() {
    // Single active question index tracked globally: e.g. "0-2" (category 0, item 2)
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white py-16 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* HEADER SECTION */}
                <div className="space-y-2 border-b border-red-600 pb-8">
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                        FAQ
                    </h1>
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">
                        EVERYTHING YOU NEED TO KNOW
                    </p>
                </div>

                {/* FAQ CATEGORIES & ACCORDIONS */}
                <div className="space-y-12">
                    {FAQ_DATA.map((section, catIdx) => (
                        <section key={catIdx} className="space-y-4">
                            <h2 className="text-xl sm:text-2xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white border-l-2 border-red-600 pl-3">
                                {section.category}
                            </h2>
                            <div className="divide-y divide-zinc-200 dark:divide-zinc-900">
                                {section.items.map((item, itemIdx) => {
                                    const id = `${catIdx}-${itemIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={itemIdx} className="border-b border-zinc-200 dark:border-zinc-900 py-4 transition-colors">
                                            <button
                                                onClick={() => toggleQuestion(id)}
                                                className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
                                            >
                                                <span className={`font-mono text-sm sm:text-base uppercase tracking-wider transition-colors ${isOpen
                                                        ? 'text-red-600 dark:text-red-500 font-bold'
                                                        : 'text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500'
                                                    }`}>
                                                    {item.question}
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
                                                            {item.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* CALLOUT FOOTER SECTION */}
                <div className="pt-16 text-center space-y-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                        STILL HAVE QUESTIONS?
                    </h3>
                    <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                        EMAIL US AT{' '}
                        <a
                            href="mailto:support@zenji.shop"
                            className="text-red-600 dark:text-red-500 font-bold hover:underline"
                        >
                            SUPPORT@ZENJI.SHOP
                        </a>
                    </p>
                </div>

            </div>
        </main>
    );
}
