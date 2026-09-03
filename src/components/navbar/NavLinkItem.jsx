import Link from 'next/link';

export default function NavLinkItem({
    label,
    path,
    isActive,
}) {
    return (
        <Link
            href={path}
            className={`transition-colors hover:text-black dark:hover:text-white ${isActive
                    ? 'text-red-600 dark:text-red-600 font-bold border-b-2 border-red-600 pb-1'
                    : ''
                }`}
        >
            {label}
        </Link>
    );
}
