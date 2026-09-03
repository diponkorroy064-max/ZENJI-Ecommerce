import { DESKTOP_NAV_LINKS } from '@/constants/navigation';
import NavLinkItem from './NavLinkItem';
import MoreDropdown from './MoreDropdown';

export default function DesktopNavigation({
    isActive,
    isDropdownOpen,
    onDropdownOpen,
    onDropdownClose,
}) {
    return (
        <nav className="hidden lg:flex items-center gap-8 font-mono text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
            {DESKTOP_NAV_LINKS.map((link) => (
                <NavLinkItem
                    key={link.path}
                    label={link.label}
                    path={link.path}
                    isActive={isActive(link.path)}
                />
            ))}

            <MoreDropdown
                isOpen={isDropdownOpen}
                onOpen={onDropdownOpen}
                onClose={onDropdownClose}
                isActive={isActive}
            />
        </nav>
    );
}
