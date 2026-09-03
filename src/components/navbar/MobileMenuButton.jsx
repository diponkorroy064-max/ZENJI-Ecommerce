import { Menu, X } from 'lucide-react';

export default function MobileMenuButton({
    isOpen,
    onClick,
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="lg:hidden text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors p-1 ml-1"
        >
            {isOpen ? (
                <X size={24} />
            ) : (
                <Menu size={24} />
            )}
        </button>
    );
}
