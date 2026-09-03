import { MOBILE_NAV_LINKS } from '@/constants/navigation';

import SearchBox from './SearchBox';
import MobileNavLink from './MobileNavLink';

export default function MobileNavigation({
    isActive,
    onClose,
}) {
    return (
        <div className="fixed inset-0 top-28 z-40 bg-white dark:bg-zinc-950 text-black dark:text-white flex flex-col p-6 lg:hidden border-t border-zinc-200 dark:border-zinc-900 font-mono tracking-widest">
            <SearchBox mobile />

            <nav className="flex flex-col gap-4 text-base uppercase">
                {MOBILE_NAV_LINKS.map((link) => (
                    <MobileNavLink
                        key={link.path}
                        label={link.label}
                        path={link.path}
                        isActive={isActive(link.path)}
                        onClick={onClose}
                    />
                ))}
            </nav>
        </div>
    );
}
