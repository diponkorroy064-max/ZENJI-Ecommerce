'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, ArrowRight, ChevronDown, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const openCart = useCart((state) => state.openCart);
    const cartItems = useCart((state) => state.cart);

    const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // Close mobile menu automatically on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Utility helper for active link styling
    const isActive = (path) => pathname === path;

    return (
        <>
            <header className="sticky top-0 z-50 h-20 w-full px-4 md:px-8 bg-white/90 dark:bg-black/95 text-black dark:text-white border-b border-zinc-200 dark:border-zinc-900 backdrop-blur-md transition-colors duration-300">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

                    {/* Left: Brand Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase italic font-mono text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors">
                            ZENJI
                        </span>
                    </Link>

                    {/* Center: Nav Links (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8 font-mono text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                        <Link
                            href="/drop"
                            className={`transition-colors hover:text-black dark:hover:text-white ${isActive('/drop')
                                    ? 'text-red-600 dark:text-red-600 font-bold border-b-2 border-red-600 pb-1'
                                    : ''
                                }`}
                        >
                            DROP
                        </Link>

                        <Link
                            href="/collection"
                            className={`transition-colors hover:text-black dark:hover:text-white ${isActive('/collection')
                                    ? 'text-red-600 dark:text-red-600 font-bold border-b-2 border-red-600 pb-1'
                                    : ''
                                }`}
                        >
                            COLLECTION
                        </Link>

                        <Link
                            href="/lookbook"
                            className={`transition-colors hover:text-black dark:hover:text-white ${isActive('/lookbook')
                                    ? 'text-red-600 dark:text-red-600 font-bold border-b-2 border-red-600 pb-1'
                                    : ''
                                }`}
                        >
                            LOOKBOOK
                        </Link>

                        <Link
                            href="/our-story"
                            className={`transition-colors hover:text-black dark:hover:text-white ${isActive('/our-story')
                                    ? 'text-red-600 dark:text-red-600 font-bold border-b-2 border-red-600 pb-1'
                                    : ''
                                }`}
                        >
                            OUR STORY
                        </Link>

                        {/* Standard Dropdown Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors uppercase font-mono text-sm tracking-widest py-2 focus:outline-none">
                                MORE{' '}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-48 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-2 shadow-xl">
                                    <Link
                                        href="/collaboration"
                                        className={`block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white text-xs font-mono tracking-wider ${isActive('/collaboration')
                                                ? 'text-red-600 dark:text-red-600 font-bold'
                                                : ''
                                            }`}
                                    >
                                        COLLABORATION
                                    </Link>
                                    <Link
                                        href="/reviews"
                                        className={`block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white text-xs font-mono tracking-wider ${isActive('/reviews')
                                                ? 'text-red-600 dark:text-red-600 font-bold'
                                                : ''
                                            }`}
                                    >
                                        REVIEWS
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className={`block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white text-xs font-mono tracking-wider ${isActive('/faq')
                                                ? 'text-red-600 dark:text-red-600 font-bold'
                                                : ''
                                            }`}
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right: Search Input, Theme Toggle & Action Icons */}
                    <div className="flex items-center gap-3 sm:gap-4">

                        {/* Search Box (Desktop) */}
                        <div className="hidden sm:flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/60 px-3 py-1.5 focus-within:border-black dark:focus-within:border-white transition-colors">
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                className="bg-transparent text-xs font-mono tracking-widest text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none w-28 md:w-36 uppercase"
                            />
                            <button aria-label="Submit search" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                <ArrowRight size={14} />
                            </button>
                        </div>

                        {/* Theme Toggle Button (Placed directly right of search box) */}
                        <ThemeToggle />

                        {/* Cart Icon */}
                        <button
                            onClick={openCart}
                            className="relative text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors p-1"
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
                        <Link
                            href="/account"
                            className={`p-1 transition-colors ${isActive('/account')
                                    ? 'text-red-600 dark:text-red-600'
                                    : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                                }`}
                            aria-label="Account"
                        >
                            <User size={22} />
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors p-1 ml-1"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                    </div>
                </div>
            </header>

            {/* Standard Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-20 z-40 bg-white dark:bg-zinc-950 text-black dark:text-white flex flex-col p-6 lg:hidden border-t border-zinc-200 dark:border-zinc-900 font-mono tracking-widest">

                    {/* Mobile Search */}
                    <div className="flex items-center justify-between border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-2.5 mb-6">
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            className="bg-transparent text-sm text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none w-full uppercase"
                        />
                        <Search size={16} className="text-zinc-500 dark:text-zinc-400" />
                    </div>

                    {/* Mobile Links */}
                    <nav className="flex flex-col gap-4 text-base uppercase">
                        {[
                            { label: 'DROP', path: '/drop' },
                            { label: 'COLLECTION', path: '/collection' },
                            { label: 'LOOKBOOK', path: '/lookbook' },
                            { label: 'OUR STORY', path: '/our-story' },
                            { label: 'COLLABORATION', path: '/collaboration' },
                            { label: 'REVIEWS', path: '/reviews' },
                            { label: 'FAQ & SHIPPING', path: '/faq' },
                        ].map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`py-2 border-b border-zinc-200 dark:border-zinc-900 transition-colors ${isActive(link.path)
                                        ? 'text-red-600 font-bold border-red-600'
                                        : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
