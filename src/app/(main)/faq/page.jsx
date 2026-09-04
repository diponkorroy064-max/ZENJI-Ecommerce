'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCategories = [
        {
            title: "ORDERS & SHIPPING",
            items: [
                {
                    q: "Do you ship Australia-wide?",
                    a: "Yes, we ship to all states and territories across Australia via Australia Post standard and express services."
                },
                {
                    q: "Do you ship internationally?",
                    a: "We offer worldwide express shipping. Rates and estimated delivery times are calculated at checkout."
                },
                {
                    q: "Can I change or cancel my order?",
                    a: "Orders are processed rapidly. If you need to make changes, please email support@zenji.shop immediately after placing your order."
                },
                {
                    q: "How do I track my order?",
                    a: "Once your order has dispatched, you will receive a tracking link via email and SMS notification."
                }
            ]
        },
        {
            title: "STOCK & DROPS",
            items: [
                {
                    q: "When does my order ship?",
                    a: "In-stock items ship within 1-3 business days. Drop pre-orders ship according to the timeline detailed on the product page."
                },
                {
                    q: "Will sold-out pieces restock?",
                    a: "Most collections are limited edition and will not be restocked once sold out. Sign up for notifications to catch future drops."
                },
                {
                    q: "How long does a sale run?",
                    a: "Drop sales run until stock is completely exhausted or until the scheduled drop window closes."
                }
            ]
        },
        {
            title: "PRODUCTS",
            items: [
                {
                    q: "What sizes do you offer?",
                    a: "Our tees feature an oversized streetwear fit ranging from Small to XXL. Detailed measurements are available on each product page."
                },
                {
                    q: "Are the designs limited?",
                    a: "Yes, all ZENJI artwork is original, custom-engineered, and released in strictly limited quantities."
                },
                {
                    q: "How do I care for my ZENJI tee?",
                    a: "Machine wash cold inside out with like colors. Hang dry in shade. Do not tumble dry or iron directly over printed graphics."
                },
                {
                    q: "What material are the tees?",
                    a: "We use ultra-heavyweight 280GSM 100% combed cotton with reinforced stitching and custom rib collar construction."
                }
            ]
        },
        {
            title: "RETURNS & REFUNDS",
            items: [
                {
                    q: "Do you accept returns?",
                    a: "We accept returns for store credit or exchange within 14 days of delivery, provided items are unworn with original tags attached."
                },
                {
                    q: "My item arrived damaged – what do I do?",
                    a: "Contact support@zenji.shop within 48 hours of delivery with photos of the damaged item and packaging for an instant replacement."
                },
                {
                    q: "How long do refunds take?",
                    a: "Approved returns are processed within 3-5 business days back to your original payment method."
                }
            ]
        },
        {
            title: "BRAND",
            items: [
                {
                    q: "What is ZENJI?",
                    a: "ZENJI is an independent streetwear brand drawing heavy inspiration from dark anime aesthetics and modern cyber culture."
                },
                {
                    q: "Where does ZENJI ship?",
                    a: "We ship globally from our primary distribution facility."
                },
                {
                    q: "Does ZENJI restock products?",
                    a: "No, core collection drops operate on a limited run model to maintain exclusivity."
                },
                {
                    q: "What anime series does ZENJI draw inspiration from?",
                    a: "Our design team synthesizes themes from classic dark fantasy, mecha, and cyberpunk anime narratives."
                },
                {
                    q: "How much do ZENJI products cost?",
                    a: "Pricing ranges depending on fabrication complexity, print treatments, and garment construction details."
                },
                {
                    q: "Where is ZENJI based?",
                    a: "ZENJI operates out of Melbourne, Australia."
                },
                {
                    q: "How do I stay updated on new drops?",
                    a: "Subscribe to our VIP email/SMS list and follow our social channels for secret access codes and drop alerts."
                },
                {
                    q: "Can I collaborate with ZENJI?",
                    a: "For creative, athletic, or brand partnerships, please direct proposals to support@zenji.shop."
                }
            ]
        }
    ];

    let globalItemIndex = 0;

    return (
        <main className="bg-white text-black dark:bg-black dark:text-white font-mono min-h-screen py-16 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-2 text-black dark:text-white font-sans">
                        FAQ
                    </h1>
                    <p className="text-red-600 dark:text-red-600 text-xs tracking-widest font-bold uppercase">
                        EVERYTHING YOU NEED TO KNOW
                    </p>
                    <div className="w-full h-px bg-zinc-200 dark:bg-red-900/60 mt-6" />
                </header>

                {/* FAQ Content Sections */}
                <div className="space-y-12">
                    {faqCategories.map((category, catIdx) => (
                        <section key={catIdx} className="space-y-4">
                            {/* Category Title */}
                            <div className="flex items-center gap-2 border-l-4 border-red-600 pl-3 py-1">
                                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-black dark:text-white font-sans">
                                    {category.title}
                                </h2>
                            </div>

                            {/* Accordion List */}
                            <div className="divide-y divide-zinc-200 dark:divide-zinc-900 border-t border-b border-zinc-200 dark:border-zinc-900">
                                {category.items.map((item) => {
                                    const currentIndex = globalItemIndex++;
                                    const isOpen = openIndex === currentIndex;

                                    return (
                                        <div key={currentIndex} className="py-4">
                                            <button
                                                onClick={() => toggleAccordion(currentIndex)}
                                                className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                                            >
                                                <span className="text-sm md:text-base text-zinc-800 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-150">
                                                    {item.q}
                                                </span>
                                                <span className="text-red-600 dark:text-red-600 ml-4 shrink-0">
                                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="mt-2 pr-8 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Bottom Contact Section */}
                <footer className="mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-900 text-center space-y-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black dark:text-white font-sans">
                        STILL HAVE QUESTIONS?
                    </h3>

                    <p className="text-xs md:text-sm tracking-widest uppercase">
                        EMAIL US AT{' '}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@zenji.shop" className="text-red-600 hover:underline font-bold">
                            SUPPORT@ZENJI.SHOP
                        </a>
                    </p>
                </footer>
            </div>
        </main>
    );
}

