import { ShoppingCart } from 'lucide-react';

export default function CartButton({
    cartCount,
    onOpen,
}) {
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label="Open Cart"
            className="relative text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors p-1"
        >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </button>
    );
}
