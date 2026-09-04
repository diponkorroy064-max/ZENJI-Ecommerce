'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Check, X } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function ReturnPolicyPage() {
    return (
        <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-black dark:text-white font-mono py-16 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* HEADER SECTION */}
                <MotionDiv
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 border-b border-red-600 pb-8"
                >
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-sans text-zinc-900 dark:text-white">
                        RETURN POLICY
                    </h1>
                    <p className="text-red-600 dark:text-red-500 text-xs sm:text-sm font-bold tracking-widest uppercase">
                        NO DRAMA. JUST RULES.
                    </p>
                </MotionDiv>

                {/* INTRO SUMMARY */}
                <div className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed uppercase tracking-wide">
                    <p>
                        YOU HAVE 14 DAYS FROM DELIVERY TO RETURN AN UNWORN, UNWASHED ITEM. FAULTY OR INCORRECT ITEMS ARE ON US, INCLUDING RETURN SHIPPING.
                    </p>
                    <p>
                        THIS POLICY SITS ALONGSIDE OUR{' '}
                        <Link href="/terms" className="text-red-600 dark:text-red-500 underline underline-offset-4 hover:opacity-80">
                            TERMS & CONDITIONS
                        </Link>{' '}
                        AND DOES NOT LIMIT YOUR RIGHTS UNDER THE AUSTRALIAN CONSUMER LAW.
                    </p>
                </div>

                {/* SECTION 01: THE SHORT VERSION */}
                <section className="space-y-4 pt-4">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">01</span> THE SHORT VERSION
                    </h2>
                    <ul className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                        <li className="flex items-start gap-2.5">
                            <Check className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                            <span>14 DAYS TO RETURN UNWORN, UNWASHED ITEMS.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <Check className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                            <span>FAULTY ITEMS: WE COVER RETURN SHIPPING.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <X className="text-red-600 dark:text-red-500 shrink-0 mt-0.5" size={16} />
                            <span>SALE ITEMS: FINAL SALE, NO CHANGE-OF-MIND RETURNS.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <X className="text-red-600 dark:text-red-500 shrink-0 mt-0.5" size={16} />
                            <span>WORN, WASHED OR DAMAGED ITEMS: NOT ACCEPTED.</span>
                        </li>
                    </ul>
                </section>

                {/* SECTION 02: ELIGIBILITY */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">02</span> ELIGIBILITY
                    </h2>
                    <div className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                        <p className="font-bold text-zinc-900 dark:text-white">TO QUALIFY FOR A RETURN:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-600 dark:text-zinc-400">
                            <li>THE ITEM MUST BE RETURNED WITHIN 14 DAYS OF THE DELIVERY DATE.</li>
                            <li>THE ITEM MUST BE UNWORN AND UNWASHED.</li>
                            <li>ORIGINAL TAGS MUST STILL BE ATTACHED.</li>
                            <li>THE ITEM MUST BE IN ITS ORIGINAL PACKAGING WHERE POSSIBLE.</li>
                            <li>PROOF OF PURCHASE IS REQUIRED &mdash; YOUR ORDER NUMBER OR ORDER EMAIL.</li>
                        </ul>

                        <p className="font-bold text-zinc-900 dark:text-white pt-2">NOT ELIGIBLE FOR A CHANGE-OF-MIND RETURN:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-600 dark:text-zinc-400">
                            <li>ITEMS MARKED AS FINAL SALE.</li>
                            <li>ITEMS THAT HAVE BEEN WORN, WASHED OR ALTERED.</li>
                            <li>ITEMS DAMAGED BY CUSTOMER MISUSE.</li>
                            <li>ITEMS RETURNED AFTER 14 DAYS.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 03: HOW TO RETURN */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">03</span> HOW TO RETURN
                    </h2>
                    <div className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide leading-relaxed">
                        <p>
                            <strong className="text-zinc-900 dark:text-white">STEP 1 &mdash; EMAIL US.</strong> WRITE TO{' '}
                            <a href="mailto:support@zenji.shop" className="text-red-600 dark:text-red-500 underline underline-offset-4">
                                SUPPORT@ZENJI.SHOP
                            </a>{' '}
                            WITH THE SUBJECT <span className="text-zinc-900 dark:text-white font-bold">RETURN &mdash; [YOUR ORDER NUMBER]</span>. INCLUDE PHOTOS OF THE ITEM AND YOUR REASON FOR RETURNING IT.
                        </p>
                        <p>
                            <strong className="text-zinc-900 dark:text-white">STEP 2 &mdash; WAIT FOR APPROVAL.</strong> WE REPLY WITHIN 2 BUSINESS DAYS WITH THE RETURN ADDRESS AND INSTRUCTIONS. DO NOT SHIP ANYTHING BACK BEFORE YOU HAVE THEM.
                        </p>
                        <p>
                            <strong className="text-zinc-900 dark:text-white">STEP 3 &mdash; SHIP THE ITEM BACK.</strong> PACK IT SECURELY AND USE TRACKED SHIPPING. RETURN SHIPPING IS PAID BY YOU, EXCEPT ON FAULTY OR INCORRECT ITEMS.
                        </p>
                        <p>
                            <strong className="text-zinc-900 dark:text-white">STEP 4 &mdash; REFUND IS PROCESSED.</strong> WITHIN 5-10 BUSINESS DAYS OF US RECEIVING THE ITEM, BACK TO YOUR ORIGINAL PAYMENT METHOD.
                        </p>
                    </div>
                </section>

                {/* SECTION 04: FAULTY OR WRONG ITEMS */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">04</span> FAULTY OR WRONG ITEMS
                    </h2>
                    <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide leading-relaxed">
                        <p>IF YOUR ITEM ARRIVES DAMAGED, DEFECTIVE, OR AS THE WRONG SIZE OR PRODUCT:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-600 dark:text-zinc-400">
                            <li>
                                EMAIL{' '}
                                <a href="mailto:support@zenji.shop" className="text-red-600 dark:text-red-500 underline underline-offset-4">
                                    SUPPORT@ZENJI.SHOP
                                </a>{' '}
                                WITHIN 7 DAYS OF DELIVERY.
                            </li>
                            <li>INCLUDE YOUR ORDER NUMBER AND CLEAR PHOTOS OF THE FAULT.</li>
                            <li>WE WILL REPLACE OR REFUND THE ITEM, AND WE COVER RETURN SHIPPING.</li>
                        </ul>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs italic pt-1">
                            THIS IS YOUR RIGHT UNDER THE AUSTRALIAN CONSUMER LAW, NOT A GOODWILL GESTURE.
                        </p>
                    </div>
                </section>

                {/* SECTION 05: REFUNDS */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">05</span> REFUNDS
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                        <li>REFUNDS ARE ISSUED TO THE ORIGINAL PAYMENT METHOD.</li>
                        <li>PROCESSING TIME: 5-10 BUSINESS DAYS AFTER WE RECEIVE THE RETURN.</li>
                        <li>THE ORIGINAL SHIPPING FEE IS NON-REFUNDABLE.</li>
                        <li>RETURN SHIPPING IS YOUR COST, EXCEPT ON FAULTY OR INCORRECT ITEMS.</li>
                    </ul>
                </section>

                {/* SECTION 06: EXCHANGES */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">06</span> EXCHANGES
                    </h2>
                    <div className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide leading-relaxed">
                        <p>
                            WE DO NOT OFFER DIRECT EXCHANGES. RETURN YOUR ITEM, THEN PLACE A NEW ORDER IN THE CORRECT SIZE.
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            EVERY DROP IS LIMITED AND THERE ARE NO RESTOCKS, SO WE CANNOT HOLD STOCK WHILE A RETURN IS IN TRANSIT.
                        </p>
                    </div>
                </section>

                {/* SECTION 07: AUSTRALIAN CONSUMER LAW */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">07</span> AUSTRALIAN CONSUMER LAW
                    </h2>
                    <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide leading-relaxed">
                        <p>
                            YOUR STATUTORY RIGHTS UNDER THE AUSTRALIAN CONSUMER LAW ARE NOT AFFECTED BY THIS POLICY. OUR GOODS COME WITH GUARANTEES THAT CANNOT BE EXCLUDED.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-600 dark:text-zinc-400">
                            <li><strong className="text-zinc-900 dark:text-white">MAJOR FAULT:</strong> YOU CHOOSE A REFUND, A REPLACEMENT OR A REPAIR.</li>
                            <li><strong className="text-zinc-900 dark:text-white">MINOR FAULT:</strong> WE MAY CHOOSE TO REPAIR, REPLACE OR REFUND.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 08: CONTACT */}
                <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-lg sm:text-xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-500 font-mono text-sm">08</span> CONTACT
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 uppercase tracking-wide leading-relaxed">
                        EMAIL:{' '}
                        <a href="mailto:support@zenji.shop" className="text-red-600 dark:text-red-500 underline underline-offset-4">
                            SUPPORT@ZENJI.SHOP
                        </a>
                        . SUBJECT: <span className="text-zinc-900 dark:text-white font-bold">RETURN &mdash; [ORDER NUMBER]</span>. RESPONSE TIME: WITHIN 2 BUSINESS DAYS.
                    </p>
                </section>

                {/* BOTTOM CALLOUT */}
                <div className="pt-12 border-t border-zinc-200 dark:border-zinc-900 text-center space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
                        QUESTIONS?
                    </h3>
                    <a
                        href="mailto:support@zenji.shop"
                        className="inline-block text-xs sm:text-sm font-bold text-red-600 dark:text-red-500 underline underline-offset-4 hover:opacity-80 uppercase tracking-widest"
                    >
                        EMAIL SUPPORT@ZENJI.SHOP
                    </a>
                </div>

            </div>
        </main>
    );
}
