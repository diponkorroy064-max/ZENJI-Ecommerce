import Link from 'next/link';
import { User } from 'lucide-react';

export default function AccountLink({ isActive }) {
    return (
        <Link
            href="/account"
            aria-label="Account"
            className={`p-1 transition-colors ${isActive
                    ? 'text-red-600 dark:text-red-600'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                }`}
        >
            <User size={20} />
        </Link>
    );
}
