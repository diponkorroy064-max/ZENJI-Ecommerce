'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, ArrowRight, ChevronDown, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const openCart = useCart((state) => state.openCart);
    const cartItems = useCart((state) => state.cart);

    const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <header className="bg-black/95 border-b border-zinc-900 text-white h-20 px-4 md:px-8 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

                    {/* Left: Brand Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-extrabold text-2xl md:text-3xl tracking-tighter text-white uppercase italic font-mono">
                            ZENJI
                        </span>
                    </Link>

                    {/* Center: Nav Links (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8 font-mono text-sm tracking-widest uppercase text-zinc-300">
                        <Link href="/drop" className="hover:text-white transition-colors">
                            DROP
                        </Link>
                        <Link href="/collection" className="hover:text-white transition-colors">
                            COLLECTION
                        </Link>
                        <Link href="/lookbook" className="hover:text-white transition-colors">
                            LOOKBOOK
                        </Link>
                        <Link href="/our-story" className="hover:text-white transition-colors">
                            OUR STORY
                        </Link>

                        {/* Standard Dropdown Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-white transition-colors uppercase font-mono text-sm tracking-widest py-2 focus:outline-none">
                                MORE <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-48 bg-zinc-950 border border-zinc-800 text-zinc-300 py-2 shadow-xl">
                                    <Link
                                        href="/faq"
                                        className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-mono tracking-wider"
                                    >
                                        FAQ & SHIPPING
                                    </Link>
                                    <Link
                                        href="/size-guide"
                                        className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-mono tracking-wider"
                                    >
                                        SIZE GUIDE
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-mono tracking-wider"
                                    >
                                        CONTACT
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right: Search Input & Action Icons */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* Search Box (Desktop) */}
                        <div className="hidden sm:flex items-center gap-2 border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 focus-within:border-white transition-colors">
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                className="bg-transparent text-xs font-mono tracking-widest text-white placeholder-zinc-500 focus:outline-none w-32 md:w-44 uppercase"
                            />
                            <button aria-label="Submit search" className="text-zinc-400 hover:text-white transition-colors">
                                <ArrowRight size={14} />
                            </button>
                        </div>

                        {/* Cart Icon */}
                        <button
                            onClick={openCart}
                            className="relative text-zinc-300 hover:text-white transition-colors p-1"
                            aria-label="Open Cart"
                        >
                            <ShoppingCart size={22} />
                            {totalCartCount > 0 && (
                                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    {totalCartCount}
                                </span>
                            )}
                        </button>

                        {/* Account Icon */}
                        <Link href="/account" className="text-zinc-300 hover:text-white transition-colors p-1" aria-label="Account">
                            <User size={22} />
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-zinc-300 hover:text-white transition-colors p-1 ml-1"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Standard Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-20 z-40 bg-zinc-950 text-white flex flex-col p-6 lg:hidden border-t border-zinc-900 font-mono tracking-widest">
                    {/* Mobile Search */}
                    <div className="flex items-center justify-between border border-zinc-700 bg-zinc-900 px-3 py-2.5 mb-6">
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            className="bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none w-full uppercase"
                        />
                        <Search size={16} className="text-zinc-400" />
                    </div>

                    {/* Mobile Links */}
                    <nav className="flex flex-col gap-5 text-base uppercase">
                        <Link
                            href="/drop"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            DROP
                        </Link>
                        <Link
                            href="/collection"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            COLLECTION
                        </Link>
                        <Link
                            href="/look-book"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            LOOKBOOK
                        </Link>
                        <Link
                            href="/our-story"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            OUR STORY
                        </Link>
                        <Link
                            href="/size-guide"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            SIZE GUIDE
                        </Link>
                        <Link
                            href="/faq-shipping"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-zinc-400 py-1 border-b border-zinc-900"
                        >
                            FAQ & SHIPPING
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
