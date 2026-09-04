'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Lock, User, Sparkles, LogIn, ExternalLink, } from 'lucide-react';
import { DiApple } from 'react-icons/di';
import { FcGoogle } from 'react-icons/fc';


export default function SignInPage() {
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex items-center justify-center py-10 md:py-20 transition-colors duration-200">
            <div className="w-full max-w-md border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-black/80 p-8 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">

                {/* Brand Header */}
                <div className="text-center space-y-2 mb-8">
                    <Link href="/" className="inline-block">
                        <span className="font-extrabold text-3xl tracking-tighter uppercase italic font-mono text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors">
                            ZENJI
                        </span>
                    </Link>
                    <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black dark:text-white font-sans mt-2 flex items-center justify-center gap-2">
                        <span>BEGIN YOUR JOURNEY</span>
                    </h1>
                    <p className="text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                        Sign in to personalize your experience
                    </p>
                </div>

                {/* Social Login / Auth Options */}
                <div className="space-y-3">
                    {/* Apple Sign In Button */}
                    <button
                        type="button"
                        className="w-full bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-black dark:border-white"
                    >
                        <DiApple size={20} />
                        <span>Continue with Apple</span>
                    </button>

                    {/* Google Sign In Button */}
                    <button
                        type="button"
                        className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-zinc-300 dark:border-zinc-800"
                    >

                        <FcGoogle size={20} />
                        <span>Continue with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="relative my-6 flex items-center justify-center">
                        <div className="w-full border-t border-zinc-200 dark:border-zinc-900" />
                        <span className="bg-zinc-50 dark:bg-black px-3 text-[10px] tracking-widest text-zinc-400 uppercase absolute font-bold flex items-center gap-1">
                            OR
                        </span>
                    </div>

                    {/* Expandable Email Form or Trigger Button */}
                    {!showEmailForm ? (
                        <button
                            type="button"
                            onClick={() => setShowEmailForm(true)}
                            className="w-full bg-transparent text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors border border-zinc-300 dark:border-zinc-800"
                        >
                            <Mail size={14} />
                            <span>Continue with Email</span>
                        </button>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                            <div className="space-y-1">
                                <label className="text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                                    <Mail size={12} />
                                    <span>EMAIL ADDRESS</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="YOU@EMAIL.COM"
                                        required
                                        className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                                    <Lock size={12} />
                                    <span>PASSWORD</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors font-sans mt-2"
                            >
                                <LogIn size={14} />
                                <span>SIGN IN</span>
                                <ArrowRight size={14} />
                            </button>
                        </form>
                    )}

                    {/* Browse as Guest Option */}
                    <div className="text-center pt-4">
                        <Link
                            href="/auth/signin"
                            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-zinc-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
                        >
                            <User size={12} />
                            <span>Browse as Guest</span>
                        </Link>
                    </div>

                    {/* Terms & Privacy Policy */}
                    <p className="text-[10px] leading-relaxed text-center text-zinc-400 dark:text-zinc-600 tracking-wider pt-2">
                        By continuing, you agree to our{' '}
                        <Link href="/terms" className="underline hover:text-black dark:hover:text-white inline-flex items-center gap-0.5">
                            <span>Terms</span>
                        </Link>{' '}
                        &{' '}
                        <Link href="/privacy" className="underline hover:text-black dark:hover:text-white inline-flex items-center gap-0.5">
                            <span>Privacy Policy</span>
                        </Link>
                    </p>

                    {/* Bottom Registration Link */}
                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-900 mt-6 text-center">
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 tracking-wider flex items-center justify-center gap-1 flex-wrap">
                            <span>DON'T HAVE AN ACCOUNT?</span>
                            <Link
                                href="/auth/register"
                                className="text-red-600 hover:underline font-bold tracking-widest uppercase inline-flex items-center gap-1 ml-1"
                            >
                                <span>REGISTER NOW</span>
                                <ExternalLink size={11} />
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
