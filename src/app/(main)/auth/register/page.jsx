'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DiApple } from 'react-icons/di';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';


export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoading(true);
        console.log('Registering user:', formData);

        const { data, error } = await authClient.signUp.email({
            name: formData.firstName + ' ' + formData.lastName,
            // image: null,
            email: formData.email,
            password: formData.password,
            // role: 'user',
        });

        setIsLoading(false);

        if (error) {
            toast.error("Sign up failed: " + error.message);
        } else if (data) {
            toast.success("Sign up successful! Please verify your email.");
            router.push('/');
        }
    };

    const handleSigninGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
        redirect("/");
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

                    {/* Apple Sign Up Button */}
                    <button type="button" className="w-full bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-black dark:border-white cursor-pointer">
                        <DiApple size={20} />
                        <span>Sign up with Apple</span>
                    </button>

                    {/* Google Sign Up Button */}
                    <button onClick={handleSigninGoogle} type="button" className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3.5 px-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors border border-zinc-300 dark:border-zinc-800 cursor-pointer">
                        <FcGoogle size={20} />
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
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors font-sans mt-4">
                        <span>CREATE ACCOUNT</span>
                        <ArrowRight size={14} />
                    </button>
                </form>

                {/* Bottom Sign In Link */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-900 mt-6 text-center">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 tracking-wider">
                        ALREADY HAVE AN ACCOUNT?{' '}
                        <Link href="/auth/signin" className="text-red-600 hover:underline font-bold tracking-widest uppercase ml-1">
                            SIGN IN
                        </Link>
                    </p>
                </div>

            </div>
        </main>
    );
}

