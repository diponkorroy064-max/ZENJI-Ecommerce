/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Semantic surface palette defaulting to light mode base tones
                background: {
                    DEFAULT: '#ffffff',
                    alt: '#f4f4f5', // zinc-100 equivalent for elevated cards/sections in light mode
                    dark: '#000000',
                },
                foreground: {
                    DEFAULT: '#09090b', // zinc-950 equivalent
                    muted: '#71717a', // zinc-500
                    dark: '#ffffff',
                },
                // Brand highlight colors
                brand: {
                    red: '#dc2626', // High-energy cyber red accent
                    yellow: '#f59e0b',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
};

