'use client';

import React from 'react';
import { motion } from 'framer-motion';

const COOKIE_SECTIONS = [
    {
        number: "01",
        title: "WHAT ARE COOKIES",
        content: [
            {
                type: "paragraph",
                text: "COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT ZENJI.SHOP. THEY HELP US PROVIDE A SEAMLESS SHOPPING EXPERIENCE, REMEMBER YOUR PREFERENCES, AND UNDERSTAND HOW YOU INTERACT WITH OUR SITE."
            }
        ]
    },
    {
        number: "02",
        title: "HOW WE USE COOKIES",
        content: [
            { type: "bullet", text: "ESSENTIAL COOKIES: REQUIRED FOR CORE SITE FUNCTIONALITY, SUCH AS SAVING ITEMS TO YOUR SHOPPING CART AND SECURE CHECKOUT." },
            { type: "bullet", text: "ANALYTICS COOKIES: WE USE GOOGLE ANALYTICS TO TRACK VISITOR BEHAVIOUR, PAGE VIEWS, AND TRAFFIC SOURCES TO IMPROVE OUR WEBSITE." },
            { type: "bullet", text: "PREFERENCE COOKIES: REMEMBER YOUR SELECTIONS SUCH AS CURRENCY, POPUP DISMISSALS, AND DISPLAY PREFERENCES." },
            { type: "bullet", text: "LOCAL STORAGE: WE USE BROWSER LOCALSTORAGE TO PRESERVE YOUR SPLASH SCREEN STATUS AND SHOPPING BAG DRAFTS." }
        ]
    },
    {
        number: "03",
        title: "THIRD-PARTY COOKIES",
        content: [
            { type: "paragraph", text: "SOME COOKIES ARE PLACED BY THIRD-PARTY SERVICES THAT APPEAR ON OUR PAGES:" },
            { type: "bullet", text: "STRIPE: SECURE PAYMENT PROCESSING AND FRAUD PREVENTION AT CHECKOUT." },
            { type: "bullet", text: "GOOGLE ANALYTICS: ANONYMOUS STATISTICAL ANALYSIS OF SITE PERFORMANCE." },
            { type: "paragraph", text: "WE DO NOT SELL YOUR COOKIE DATA OR ALLOW THIRD PARTIES TO TRACK YOU FOR EXTERNAL ADVERTISING." }
        ]
    },
    {
        number: "04",
        title: "MANAGING & DISABLING COOKIES",
        content: [
            { type: "paragraph", text: "YOU CAN CONTROL OR DISABLE COOKIES AT ANY TIME THROUGH YOUR BROWSER SETTINGS:" },
            { type: "bullet", text: "CHROME: SETTINGS > PRIVACY AND SECURITY > COOKIES AND OTHER SITE DATA." },
            { type: "bullet", text: "SAFARI: PREFERENCES > PRIVACY > BLOCK ALL COOKIES." },
            { type: "bullet", text: "FIREFOX: OPTIONS > PRIVACY & SECURITY > COOKIES AND SITE DATA." },
            { type: "paragraph", text: "PLEASE NOTE THAT DISABLING ESSENTIAL COOKIES MAY PREVENT YOU FROM ADDING ITEMS TO YOUR CART OR COMPLETING PURCHASES." }
        ]
    },
    {
        number: "05",
        title: "UPDATES TO THIS POLICY",
        content: [
            { type: "paragraph", text: "WE MAY UPDATE THIS COOKIE POLICY FROM TIME TO TIME TO REFLECT CHANGES IN TECHNOLOGY OR LEGAL REQUIREMENTS. CONTINUED USE OF ZENJI.SHOP MEANS YOU AGREE TO THE UPDATED TERMS." }
        ]
    },
    {
        number: "06",
        title: "CONTACT US",
        content: [
            { type: "paragraph", text: "IF YOU HAVE QUESTIONS ABOUT OUR USE OF COOKIES, EMAIL US AT SUPPORT@ZENJI.SHOP WITH THE SUBJECT LINE \"COOKIE ENQUIRY\"." }
        ]
    }
];

const CookiesPage = () => {
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
                        COOKIE POLICY
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
                        THIS COOKIE POLICY EXPLAINS HOW ZENJI ("WE", "US", "OUR") USES COOKIES AND SIMILAR TRACKING TECHNOLOGIES ON ZENJI.SHOP. BY CONTINUING TO BROWSE OUR SITE, YOU AGREE TO OUR USE OF COOKIES.
                    </p>
                </motion.div>

                {/* SECTIONS */}
                <div className="space-y-10 pt-4">
                    {COOKIE_SECTIONS.map((section, idx) => (
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
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@zenji.shop" className="text-red-600 dark:text-red-500 font-bold hover:underline">
                            SUPPORT@ZENJI.SHOP
                        </a>
                    </p>
                </motion.div>

            </div>
        </main>
    );
};

export default CookiesPage;
