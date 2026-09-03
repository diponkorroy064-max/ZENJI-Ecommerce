import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { MORE_NAV_LINKS } from '@/constants/navigation';

export default function MoreDropdown({
    isOpen,
    onOpen,
    onClose,
    isActive,
}) {
    return (
        <div
            className="relative"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
            <button
                type="button"
                className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors uppercase font-mono text-sm tracking-widest py-2 focus:outline-none"
            >
                MORE

                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-48 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-2 shadow-xl">
                    {MORE_NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white text-xs font-mono tracking-wider ${isActive(link.path)
                                    ? 'text-red-600 font-bold'
                                    : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
