'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Link from 'next/link';


export default function CartSidebar({ isOpen, onClose, cartItems = [] }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-9999 overflow-hidden">
            {/* Dark Overlay Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Full Viewport Slide-over Panel */}
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
                <div className="w-screen max-w-md h-screen bg-white dark:bg-black text-zinc-900 dark:text-white shadow-2xl flex flex-col justify-between border-l border-zinc-200 dark:border-zinc-800 transition-transform duration-300">

                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
                        <h2 className="text-2xl font-black uppercase tracking-wider">
                            YOUR CART
                        </h2>
                        <button type="button" onClick={onClose} className="p-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors cursor-pointer" aria-label="Close cart">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Empty Cart Body */}
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                        {cartItems.length === 0 ? (
                            <>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                                    YOUR CART IS EMPTY
                                </h3>

                                <p className="text-red-600 font-mono text-xs font-bold uppercase tracking-[0.25em]">
                                    THE ARC AWAITS.
                                </p>

                                <Link href="/collection" onClick={onClose} className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider px-8 py-3.5 transition-colors shadow-md mt-2">
                                    SHOP COLLECTION <span className="ml-2">→</span>
                                </Link>
                            </>
                        ) : (
                            <div className="w-full space-y-4">
                                {/* Cart items list */}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>,
        document.body
    );
}

