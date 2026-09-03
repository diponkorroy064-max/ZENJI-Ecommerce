import { Search, X } from 'lucide-react';

export default function SearchBox({
    isOpen,
    onOpen,
    onClose,
    mobile = false,
}) {
    if (mobile) {
        return (
            <div className="flex items-center justify-between border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-2.5 mb-6">
                <input
                    type="text"
                    placeholder="SEARCH..."
                    className="bg-transparent text-sm text-black dark:text-white placeholder-zinc-400 focus:outline-none w-full uppercase"
                />

                <Search
                    size={16}
                    className="text-zinc-500"
                />
            </div>
        );
    }

    return (
        <div className="hidden sm:flex items-center">
            {isOpen ? (
                <div className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 animate-in fade-in duration-200">
                    <input
                        type="text"
                        autoFocus
                        placeholder="SEARCH..."
                        className="bg-transparent text-xs font-mono tracking-widest text-black dark:text-white placeholder-zinc-400 focus:outline-none w-32 md:w-40 uppercase"
                    />

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close Search"
                        className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={onOpen}
                    aria-label="Open Search"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors p-1"
                >
                    <Search size={20} />
                </button>
            )}
        </div>
    );
}
