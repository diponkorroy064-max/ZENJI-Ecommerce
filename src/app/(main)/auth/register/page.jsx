'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Registering user:', formData);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex items-center justify-center p-4 transition-colors duration-200 py-10 md:py-20">
            <div className="w-full max-w-md border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-black/80 p-8 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">

                {/* Brand Header */}
                <div className="text-center space-y-2 mb-8">
                    <Link href="/auth/signin" className="inline-block">
                        <span className="font-extrabold text-3xl tracking-tighter uppercase italic font-mono text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors">
                            ZENJI
                        </span>
                    </Link>
                    <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black dark:text-white font-sans mt-2">
                        JOIN THE SYNDICATE
                    </h1>
                    <p className="text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                        Create an account for early drop access
                    </p>
                </div>

                {/* Social Registration */}
                <div className="space-y-3 mb-6">
                    <button
                        type="button"
                        className="w-full bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-black dark:border-white"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.02-7.73-7.85-12.12-14.51-6.84-10.32-12.01-21.84-15.52-34.56-3.51-12.72-5.27-24.53-5.27-35.43 0-14.5 3.56-26.4 10.68-35.7 7.12-9.3 16.03-14.07 26.74-14.32 4.9.12 10.22 1.32 15.96 3.6 5.74 2.28 9.53 3.48 11.38 3.6 2.54 0 6.57-1.32 12.09-3.96 5.52-2.64 10.51-3.84 14.97-3.6 11.83.98 21.05 5.58 27.67 13.8-10.56 6.4-15.72 15.35-15.48 26.86.24 9.06 3.75 16.63 10.53 22.71 6.78 6.08 14.82 9.58 24.12 10.5-2.52 7.56-6.06 15.22-10.62 22.98zm-22.18-103.5c0 6.64-2.4 12.87-7.2 18.69-5.18 6.08-11.43 9.72-18.75 10.92-.37-.84-.55-1.8-.55-2.88 0-6.6 2.47-12.95 7.41-19.05 4.94-6.1 11.23-9.75 18.87-10.95.12.96.22 2.06.22 3.27z" />
                        </svg>
                        <span>Sign up with Apple</span>
                    </button>

                    <button
                        type="button"
                        className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-zinc-300 dark:border-zinc-800"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                                fill="#EA4335"
                                d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.1 9 5 12 5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.1-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                            />
                        </svg>
                        <span>Sign up with Google</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="relative my-6 flex items-center justify-center">
                    <div className="w-full border-t border-zinc-200 dark:border-zinc-900" />
                    <span className="bg-zinc-50 dark:bg-black px-3 text-[10px] tracking-widest text-zinc-400 uppercase absolute font-bold">
                        OR WITH EMAIL
                    </span>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                FIRST NAME
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="JANE"
                                required
                                className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-3.5 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                LAST NAME
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="DOE"
                                required
                                className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-3.5 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            EMAIL ADDRESS
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="YOU@EMAIL.COM"
                            required
                            className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                        />
                    </div>

                    {/* Password Inputs */}
                    <div className="space-y-1">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            CONFIRM PASSWORD
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            required
                            className="mt-0.5 accent-red-600 h-4 w-4 rounded border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                        />
                        <label htmlFor="agreeToTerms" className="text-[10px] leading-tight text-zinc-600 dark:text-zinc-400 tracking-wider">
                            I AGREE TO THE{' '}
                            <Link href="/terms" className="underline text-black dark:text-white hover:text-red-600">
                                TERMS & CONDITIONS
                            </Link>{' '}
                            AND VIP EARLY ACCESS NOTIFICATIONS.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors font-sans mt-4"
                    >
                        <span>CREATE ACCOUNT</span>
                        <ArrowRight size={14} />
                    </button>
                </form>

                {/* Bottom Sign In Link */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-900 mt-6 text-center">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 tracking-wider">
                        ALREADY HAVE AN ACCOUNT?{' '}
                        <Link
                            href="/auth/signin"
                            className="text-red-600 hover:underline font-bold tracking-widest uppercase ml-1"
                        >
                            SIGN IN
                        </Link>
                    </p>
                </div>

            </div>
        </main>
    );
}

