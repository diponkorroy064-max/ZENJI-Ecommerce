'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-16 pb-8 border-t border-zinc-900 overflow-hidden font-mono">
            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="text-[15vw] font-extrabold text-zinc-900/40 tracking-tighter uppercase italic">
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
                                className="w-12 h-auto"
                            />
                        </Link>

                        {/* Description */}
                        <p className="text-zinc-400 text-sm max-w-sm leading-relaxed tracking-wider">
                            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
                        </p>

                        {/* Social Buttons */}
                        <div className="space-y-3 pt-2">
                            <span className="block text-xs uppercase tracking-widest text-zinc-500 font-bold">
                                FOLLOW THE LORE
                            </span>
                            <div className="flex flex-wrap gap-3">
                                {/* TikTok Button */}
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white text-black font-sans font-semibold px-4 py-2.5 rounded-sm text-sm hover:opacity-90 transition-opacity"
                                >
                                    <FaTiktok size={16} />
                                    <span>TikTok</span>
                                </a>

                                {/* Instagram Gradient Button */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white font-sans font-semibold px-4 py-2.5 rounded-sm text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 transition-opacity"
                                >
                                    <FaInstagram size={16} />
                                    <span>Instagram</span>
                                </a>

                                {/* Facebook Button */}
                                <a
                                    href="https://facebook.com"
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
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                            DROPS
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider text-zinc-300">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/drop" className="hover:text-white transition-colors">
                                    Drop
                                </Link>
                            </li>
                            <li>
                                <Link href="/collection" className="hover:text-white transition-colors">
                                    Collection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                            EXPLORE
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider text-zinc-300">
                            <li>
                                <Link href="/lookbook" className="hover:text-white transition-colors">
                                    Lookbook
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-story" className="hover:text-white transition-colors">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/collection" className="hover:text-white transition-colors">
                                    Collection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                            COMMUNITY
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider text-zinc-300">
                            <li>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Legal Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                            CONTACT
                        </h3>
                        <ul className="space-y-3 text-sm tracking-wider text-zinc-300">
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="hover:text-white transition-colors">
                                    Review
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="hover:text-white transition-colors">
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-white transition-colors">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <div>
                        © 2026 ZENJI. All drops are final. No restocks. Ever.
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-zinc-400 transition-colors">
                            Terms
                        </Link>
                        <Link href="/cookies" className="hover:text-zinc-400 transition-colors">
                            Cookies
                        </Link>
                        <div className="flex items-center gap-2 text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 inline-block" />
                            <span>Anime-inspired. Gamer-built. Community-owned.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
