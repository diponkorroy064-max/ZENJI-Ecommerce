import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function WishlistButton({ isActive }) {
    return (
        <Link
            href="/wishlist"
            aria-label="Wishlist"
            className={`p-1 transition-colors ${isActive
                    ? 'text-red-600 dark:text-red-600'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                }`}
        >
            <Heart size={20} />
        </Link>
    );
}
