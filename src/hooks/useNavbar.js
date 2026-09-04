import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function useNavbar() {
    const pathname = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [isDropdownOpen, setIsDropdownOpen] =
        useState(false);

    const [isSearchOpen, setIsSearchOpen] =
        useState(false);

    // const [showAnnouncement, setShowAnnouncement] =
    //     useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const scrollingDown =
                currentScrollY > lastScrollY &&
                currentScrollY > 40;

            // setShowAnnouncement(!scrollingDown);

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path) => pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((previous) => !previous);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return {
        pathname,

        isMobileMenuOpen,
        isDropdownOpen,
        isSearchOpen,
        // showAnnouncement,

        setIsDropdownOpen,
        setIsSearchOpen,

        toggleMobileMenu,
        closeMobileMenu,

        isActive,
    };
}
