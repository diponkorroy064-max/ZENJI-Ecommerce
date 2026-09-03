'use client';

import Link from 'next/link';

import { useCart } from '@/hooks/useCart';
import useNavbar from '@/hooks/useNavbar';

import AnnouncementBar from './AnnouncementBar';
import DesktopNavigation from './DesktopNavigation';
import NavbarActions from './NavbarActions';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
    const {
        isMobileMenuOpen,
        isDropdownOpen,
        isSearchOpen,
        showAnnouncement,

        setIsDropdownOpen,
        setIsSearchOpen,

        toggleMobileMenu,
        closeMobileMenu,

        isActive,
    } = useNavbar();

    const openCart = useCart(
        (state) => state.openCart
    );

    const cartItems = useCart(
        (state) => state.cart
    );

    const totalCartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="sticky top-0 z-50 w-full">

            {/* Announcement */}
            <AnnouncementBar
                isVisible={showAnnouncement}
            />

            {/* Main Header */}
            <header className="h-20 w-full px-4 md:px-8 bg-white/90 dark:bg-black/95 text-black dark:text-white border-b border-zinc-200 dark:border-zinc-900 backdrop-blur-md transition-colors duration-300">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <span className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase italic font-mono text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors">
                            ZENJI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <DesktopNavigation
                        isActive={isActive}
                        isDropdownOpen={isDropdownOpen}
                        onDropdownOpen={() =>
                            setIsDropdownOpen(true)
                        }
                        onDropdownClose={() =>
                            setIsDropdownOpen(false)
                        }
                    />

                    {/* Actions */}
                    <NavbarActions
                        isSearchOpen={isSearchOpen}
                        onSearchOpen={() =>
                            setIsSearchOpen(true)
                        }
                        onSearchClose={() =>
                            setIsSearchOpen(false)
                        }
                        cartCount={totalCartCount}
                        onCartOpen={openCart}
                        isWishlistActive={isActive(
                            '/wishlist'
                        )}
                        isAccountActive={isActive(
                            '/auth/signin'
                        )}
                        isMobileMenuOpen={
                            isMobileMenuOpen
                        }
                        onMobileMenuToggle={
                            toggleMobileMenu
                        }
                    />
                </div>
            </header>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <MobileNavigation
                    isActive={isActive}
                    onClose={closeMobileMenu}
                />
            )}
        </div>
    );
}

