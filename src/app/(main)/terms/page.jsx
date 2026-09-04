'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TERMS_SECTIONS = [
    {
        number: "01",
        title: "ABOUT ZENJI",
        content: [
            {
                type: "paragraph",
                text: "ZENJI is an Australian anime-inspired streetwear brand operating at zenji.shop. Contact: support@zenji.shop."
            }
        ]
    },
    {
        number: "02",
        title: "USING OUR WEBSITE",
        content: [
            { type: "bullet", text: "You must be 18 or over to purchase, or have parental consent." },
            { type: "bullet", text: "You agree not to misuse, hack or disrupt our website." },
            { type: "bullet", text: "We reserve the right to refuse service to anyone." },
            { type: "bullet", text: "All content on zenji.shop is owned by ZENJI." },
            { type: "bullet", text: "Do not copy, reproduce or distribute our designs or content." }
        ]
    },
    {
        number: "03",
        title: "PRODUCTS & PRICING",
        content: [
            { type: "bullet", text: "All prices are in Australian Dollars (AUD) and include GST." },
            { type: "bullet", text: "Prices are subject to change without notice." },
            { type: "bullet", text: "Product images are representative - minor colour variations may occur." },
            { type: "bullet", text: "All products are limited edition. There are no restocks." },
            { type: "bullet", text: "We reserve the right to limit quantities." }
        ]
    },
    {
        number: "04",
        title: "ORDERS & PAYMENT",
        content: [
            { type: "bullet", text: "Orders are confirmed by email after payment." },
            { type: "bullet", text: "We accept Visa, Mastercard, American Express, Apple Pay and Google Pay, via Stripe." },
            { type: "bullet", text: "Payment is processed securely by Stripe." },
            { type: "bullet", text: "Order confirmation does not guarantee stock availability." },
            { type: "bullet", text: "We reserve the right to cancel orders and issue full refunds." }
        ]
    },
    {
        number: "05",
        title: "SHIPPING",
        content: [
            { type: "bullet", text: "We ship Australia-wide only. No International shipping currently." },
            { type: "bullet", text: "Free shipping on orders over A$100." },
            { type: "bullet", text: "Standard shipping: A$9.99 flat rate." },
            { type: "bullet", text: "Estimated delivery: 3-7 business days after dispatch." },
            { type: "bullet", text: "We are not responsible for delays caused by Australia Post or couriers." },
            { type: "bullet", text: "Risk passes to you upon dispatch." }
        ]
    },
    {
        number: "06",
        title: "RETURNS & REFUNDS",
        content: [
            { type: "bullet", text: "Returns are accepted within 14 days of delivery." },
            { type: "bullet", text: "Items must be unworn and unwashed, with tags attached." },
            { type: "bullet", text: "Sale items cannot be returned for change of mind." },
            { type: "bullet", text: "To start a return, email support@zenji.shop with your order number and photos." },
            { type: "bullet", text: "Refunds are processed within 5-10 business days of us receiving the return." },
            { type: "bullet", text: "Original shipping costs are non-refundable." },
            { type: "bullet", text: "Return shipping is the customer's responsibility." },
            { type: "bullet", text: "We comply with the Australian Consumer Law (ACL). Your statutory rights apply." }
        ]
    },
    {
        number: "07",
        title: "FAULTY OR INCORRECT ITEMS",
        content: [
            { type: "paragraph", text: "If you receive a faulty or wrong item:" },
            { type: "bullet", text: "Email support@zenji.shop within 7 days of delivery." },
            { type: "bullet", text: "Include your order number and clear photos." },
            { type: "bullet", text: "We will replace or refund the item at our cost." },
            { type: "bullet", text: "This does not affect your rights under the Australian Consumer Law." }
        ]
    },
    {
        number: "08",
        title: "INTELLECTUAL PROPERTY",
        content: [
            { type: "bullet", text: "All ZENJI designs, logos, artwork and content are our property." },
            { type: "bullet", text: "Anime character artwork is licensed for commercial use." },
            { type: "bullet", text: "You may not reproduce, copy or sell ZENJI designs." },
            { type: "bullet", text: "Buying a ZENJI product does not transfer any intellectual property rights." }
        ]
    },
    {
        number: "09",
        title: "LIMITATION OF LIABILITY",
        content: [
            { type: "paragraph", text: "To the extent permitted by Australian law:" },
            { type: "bullet", text: "We are not liable for indirect or consequential loss." },
            { type: "bullet", text: "Our liability is limited to the value of your order." },
            { type: "bullet", text: "We do not guarantee uninterrupted access to zenji.shop." },
            { type: "bullet", text: "Your rights under the Australian Consumer Law are not excluded." }
        ]
    },
    {
        number: "10",
        title: "PRIVACY",
        content: [
            { type: "paragraph", text: "Your personal data is handled in accordance with our Privacy Policy." }
        ]
    },
    {
        number: "11",
        title: "CHANGES TO TERMS",
        content: [
            { type: "paragraph", text: "We may update these terms at any time. Continued use of zenji.shop means you accept the updated terms. Check this page regularly." }
        ]
    },
    {
        number: "12",
        title: "DISPUTES",
        content: [
            { type: "bullet", text: "Contact us first at support@zenji.shop." },
            { type: "bullet", text: "We aim to resolve disputes within 14 days." },
            { type: "bullet", text: "These terms are governed by the laws of New South Wales, Australia." },
            { type: "bullet", text: "The courts of New South Wales have exclusive jurisdiction." }
        ]
    },
    {
        number: "13",
        title: "AUSTRALIAN CONSUMER LAW",
        content: [
            { type: "paragraph", text: "Nothing in these terms excludes, restricts or modifies your rights under the Australian Consumer Law. Our goods come with guarantees that cannot be excluded." }
        ]
    },
    {
        number: "14",
        title: "CONTACT",
        content: [
            { type: "paragraph", text: "Email: support@zenji.shop. Response time: 2 business days." }
        ]
    }
];

export default function TermsPage() {
    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white py-16 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 border-b border-red-600 pb-8"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                        TERMS & CONDITIONS
                    </h1>
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">
                        EFFECTIVE: JULY 2026
                    </p>
                </motion.div>

                {/* PREAMBLE NOTICE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4 font-mono text-xs sm:text-sm tracking-wider uppercase text-zinc-700 dark:text-zinc-300 leading-relaxed border-l-2 border-red-600 pl-4 py-1"
                >
                    <p>
                        By accessing zenji.shop or placing an order, you agree to these Terms & Conditions. Read them carefully.
                    </p>
                    <p>
                        These terms are governed by the laws of New South Wales, Australia.
                    </p>
                </motion.div>

                {/* TERMS SECTIONS */}
                <div className="space-y-10 pt-4">
                    {TERMS_SECTIONS.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="space-y-3 border-b border-zinc-200 dark:border-zinc-900 pb-8"
                        >
                            {/* SECTION TITLE WITH NUMBER */}
                            <h2 className="flex items-center gap-3 text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                                <span className="text-red-600 dark:text-red-500 font-mono text-sm sm:text-base">
                                    {section.number}
                                </span>
                                {section.title}
                            </h2>

                            {/* SECTION CONTENT */}
                            <div className="space-y-2 pl-7 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 tracking-wider leading-relaxed">
                                {section.content.map((item, itemIdx) => (
                                    <React.Fragment key={itemIdx}>
                                        {item.type === "paragraph" && (
                                            <p className="uppercase">{item.text}</p>
                                        )}
                                        {item.type === "bullet" && (
                                            <div className="flex items-start gap-2">
                                                <span className="text-red-600 dark:text-red-500 font-bold select-none">•</span>
                                                <span className="uppercase">{item.text}</span>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* CALLOUT FOOTER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="pt-12 text-center space-y-4 border-t border-zinc-200 dark:border-zinc-900"
                >
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                        QUESTIONS?
                    </h3>
                    <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                        EMAIL{' '}
                        <a
                            href="mailto:support@zenji.shop"
                            className="text-red-600 dark:text-red-500 font-bold hover:underline"
                        >
                            SUPPORT@ZENJI.SHOP
                        </a>
                    </p>
                </motion.div>

            </div>
        </main>
    );
}
