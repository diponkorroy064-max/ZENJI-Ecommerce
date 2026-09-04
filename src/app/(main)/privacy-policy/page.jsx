'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PRIVACY_SECTIONS = [
    {
        number: "01",
        title: "INFORMATION WE COLLECT",
        content: [
            { type: "bullet", text: "Name, email, shipping address and phone number when you place an order." },
            { type: "bullet", text: "Payment information, processed securely by Stripe — we never store card details." },
            { type: "bullet", text: "Browsing data, IP address and device type via cookies." },
            { type: "bullet", text: "Your email address if you join our waitlist or popup signup." },
            { type: "bullet", text: "Communications you send us." }
        ]
    },
    {
        number: "02",
        title: "HOW WE USE YOUR INFORMATION",
        content: [
            { type: "bullet", text: "Process and fulfill your orders." },
            { type: "bullet", text: "Send order confirmations and shipping updates." },
            { type: "bullet", text: "Send marketing emails, only if you opt in." },
            { type: "bullet", text: "Improve our website and product offerings." },
            { type: "bullet", text: "Comply with legal obligations." },
            { type: "bullet", text: "Prevent fraud and protect security." }
        ]
    },
    {
        number: "03",
        title: "SHARING YOUR INFORMATION",
        content: [
            { type: "paragraph", text: "We do not sell your personal information. We share data only with:" },
            { type: "bullet", text: "Stripe, for payment processing." },
            { type: "bullet", text: "Shipping carriers — Australia Post and CouriersPlease." },
            { type: "bullet", text: "Email service providers, for transactional emails." },
            { type: "bullet", text: "Analytics providers, including Google Analytics." },
            { type: "paragraph", text: "All third parties are bound by confidentiality obligations." }
        ]
    },
    {
        number: "04",
        title: "COOKIES",
        content: [
            { type: "paragraph", text: "We use cookies to:" },
            { type: "bullet", text: "Keep items in your cart." },
            { type: "bullet", text: "Analyse site traffic, via Google Analytics." },
            { type: "bullet", text: "Remember your preferences." },
            { type: "paragraph", text: "You can disable cookies in your browser settings. Our splash screen and popup preferences are stored in localStorage." }
        ]
    },
    {
        number: "05",
        title: "DATA SECURITY",
        content: [
            { type: "paragraph", text: "We use SSL encryption on all pages. Payment data is handled by Stripe, which is PCI DSS Level 1 certified. We store data on secure servers and limit access to authorised personnel only." }
        ]
    },
    {
        number: "06",
        title: "DATA RETENTION",
        content: [
            { type: "bullet", text: "We retain order data for 7 years, as required by Australian tax law." },
            { type: "bullet", text: "Email marketing data is retained until you unsubscribe." },
            { type: "bullet", text: "You may request deletion of your account data at any time." }
        ]
    },
    {
        number: "07",
        title: "YOUR RIGHTS",
        content: [
            { type: "paragraph", text: "Under the Australian Privacy Act, you have the right to:" },
            { type: "bullet", text: "Access the personal information we hold about you." },
            { type: "bullet", text: "Correct inaccurate information." },
            { type: "bullet", text: "Request deletion of your data." },
            { type: "bullet", text: "Opt out of marketing communications at any time." },
            { type: "bullet", text: "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au." }
        ]
    },
    {
        number: "08",
        title: "MARKETING COMMUNICATIONS",
        content: [
            { type: "paragraph", text: "We send marketing emails only with your consent, and every email includes an unsubscribe link. To opt out, click unsubscribe or email support@zenji.shop." }
        ]
    },
    {
        number: "09",
        title: "THIRD PARTY LINKS",
        content: [
            { type: "paragraph", text: "Our site may link to third-party sites, including Instagram and TikTok. We are not responsible for their privacy practices." }
        ]
    },
    {
        number: "10",
        title: "CHILDREN'S PRIVACY",
        content: [
            { type: "paragraph", text: "Our site is not directed at children under 13, and we do not knowingly collect data from children." }
        ]
    },
    {
        number: "11",
        title: "CHANGES TO THIS POLICY",
        content: [
            { type: "paragraph", text: "We may update this policy. Changes are posted on this page with an updated date — the version above was last revised in July 2026. Continued use of the site means you accept the current policy." }
        ]
    },
    {
        number: "12",
        title: "CONTACT US",
        content: [
            { type: "paragraph", text: 'Privacy enquiries: support@zenji.shop — use the subject line "Privacy Enquiry". We respond within 30 business days, as required by the Privacy Act.' },
            { type: "paragraph", text: "You may also contact the OAIC directly at www.oaic.gov.au." }
        ]
    }
];

export default function PrivacyPage() {
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
                        PRIVACY POLICY
                    </h1>
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">
                        LAST UPDATED: JULY 2026
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
                        ZENJI ("we", "us", "our") operates zenji.shop. This policy explains how we collect, use, disclose and protect your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                    </p>
                </motion.div>

                {/* PRIVACY SECTIONS */}
                <div className="space-y-10 pt-4">
                    {PRIVACY_SECTIONS.map((section, idx) => (
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
