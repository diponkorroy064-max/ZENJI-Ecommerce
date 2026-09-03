'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    const pathname = usePathname();

    // Helper function to apply active styles for footer links
    const getLinkClass = (href) => {
        const isActive = pathname === href;
        return `transition-colors duration-200 flex items-center gap-1.5 ${isActive
                ? 'text-red-600 dark:text-red-500 font-bold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`;
    };

    return (
        <footer className="relative bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden font-mono transition-colors duration-300">

            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="text-[15vw] font-extrabold text-zinc-200/50 dark:text-zinc-900/40 tracking-tighter uppercase italic transition-colors duration-300">
                    ZENJI
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16">

                    {/* Brand Info & Social Buttons */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo.svg"
                                alt="ZENJI Logo"
                                width={48}
                                height={48}
                                className="w-12 h-auto dark:invert-0 invert transition-[filter] duration-300"
                            />
                        </Link>

                        {/* Description */}
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed tracking-wider transition-colors duration-300">
                            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
                        </p>

                        {/* Social Buttons */}
                        <div className="space-y-3 pt-2">
                            <span className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-bold transition-colors duration-300">
                                FOLLOW THE LORE
                            </span>
                            <div className="flex flex-wrap gap-3">
                                {/* TikTok Button */}
                                <a
                                    href="https://www.tiktok.com/@zenji_.shop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-sans font-semibold px-4 py-2.5 rounded-sm text-sm hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all duration-300"
                                >
                                    <FaTiktok size={16} />
                                    <span>TikTok</span>
                                </a>

                                {/* Instagram Gradient Button */}
                                <a
                                    href="https://www.instagram.com/zenji_.shop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white font-sans font-semibold px-4 py-2.5 rounded-sm text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 transition-opacity"
                                >
                                    <FaInstagram size={16} />
                                    <span>Instagram</span>
                                </a>

                                {/* Facebook Button */}
                                <a
                                    href="https://www.facebook.com/people/ZENJI/61592433253702"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 text-white font-sans font-semibold px-4 py-2.5 rounded-sm text-sm hover:bg-blue-700 transition-colors"
                                >
                                    <FaFacebookF size={16} />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Drops Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 transition-colors duration-300">
                            DROPS
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider">
                            <li>
                                <Link href="/" className={getLinkClass('/')}>
                                    {pathname === '/' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/drop" className={getLinkClass('/drop')}>
                                    {pathname === '/drop' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Drop
                                </Link>
                            </li>
                            <li>
                                <Link href="/collection" className={getLinkClass('/collection')}>
                                    {pathname === '/collection' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Collection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 transition-colors duration-300">
                            EXPLORE
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider">
                            <li>
                                <Link href="/look-book" className={getLinkClass('/look-book')}>
                                    {pathname === '/look-book' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Lookbook
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-story" className={getLinkClass('/our-story')}>
                                    {pathname === '/our-story' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Our Story
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 transition-colors duration-300">
                            COMMUNITY
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                            <li>
                                <a href="https://www.tiktok.com/@zenji_.shop" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/zenji_.shop" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/people/ZENJI/61592433253702" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Legal Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 transition-colors duration-300">
                            CONTACT
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider">
                            <li>
                                <Link href="/faq" className={getLinkClass('/faq')}>
                                    {pathname === '/faq' && <span className="text-red-600 dark:text-red-500"></span>}
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className={getLinkClass('/reviews')}>
                                    {pathname === '/reviews' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Review
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className={getLinkClass('/privacy-policy')}>
                                    {pathname === '/privacy-policy' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className={getLinkClass('/terms')}>
                                    {pathname === '/terms' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className={getLinkClass('/help')}>
                                    {pathname === '/help' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className={getLinkClass('/returns')}>
                                    {pathname === '/returns' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={getLinkClass('/contact')}>
                                    {pathname === '/contact' && <span className="text-red-600 dark:text-red-500"></span>}
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 transition-colors duration-300">
                    <div>
                        © 2026 ZENJI. All drops are final. No restocks. Ever.
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/privacy-policy" className={getLinkClass('/privacy-policy')}>
                            Privacy
                        </Link>
                        <Link href="/terms" className={getLinkClass('/terms')}>
                            Terms
                        </Link>
                        <Link href="/cookies" className={getLinkClass('/cookies')}>
                            Cookies
                        </Link>
                        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse inline-block" />
                            <span>Anime-inspired. Gamer-built. Community-owned.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
