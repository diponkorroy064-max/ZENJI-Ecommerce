import Link from 'next/link';

export default function MobileNavLink({
    label,
    path,
    isActive,
    onClick,
}) {
    return (
        <Link
            href={path}
            onClick={onClick}
            className={`py-2 border-b border-zinc-200 dark:border-zinc-900 transition-colors ${isActive
                    ? 'text-red-600 font-bold border-red-600'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                }`}
        >
            {label}
        </Link>
    );
}
