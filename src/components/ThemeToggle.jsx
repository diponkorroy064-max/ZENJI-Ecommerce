'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const emptySubscribe = () => () => { };

export default function ThemeToggle() {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,  // Client snapshot
        () => false  // SSR snapshot
    );

    const { resolvedTheme, setTheme } = useTheme();

    if (!mounted) {
        return (
            <div className="w-9 h-9 border border-zinc-200 dark:border-zinc-800 rounded-md bg-zinc-100 dark:bg-zinc-900" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:border-red-600 dark:hover:border-red-600 shadow-sm transition-colors duration-200 font-mono cursor-pointer"
        >
            {isDark ? (
                <Sun size={18} className="text-amber-500 transition-transform duration-200" />
            ) : (
                <Moon size={18} className="text-zinc-700 transition-transform duration-200" />
            )}
        </motion.button>
    );
}

