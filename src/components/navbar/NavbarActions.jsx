'use client';
import SearchBox from './SearchBox';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';
import AccountLink from './AccountLink';
import MobileMenuButton from './MobileMenuButton';
import ThemeToggle from '@/components/ThemeToggle';
import CartSidebar from '../cart/CartSidebar';
import { useState } from 'react';

export default function NavbarActions({
    isSearchOpen,
    onSearchOpen,
    onSearchClose,
    cartCount,
    onCartOpen,
    isWishlistActive,
    isAccountActive,
    isMobileMenuOpen,
    onMobileMenuToggle,
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartOpen = () => {
        setIsCartOpen(true);
        if (onCartOpen) onCartOpen();
    };

    return (
        <>
            <div className="flex items-center gap-3 sm:gap-4">
                <SearchBox
                    isOpen={isSearchOpen}
                    onOpen={onSearchOpen}
                    onClose={onSearchClose}
                />

                <WishlistButton
                    isActive={isWishlistActive}
                />

                <CartButton
                    cartCount={cartCount}
                    onOpen={handleCartOpen}
                />

                <AccountLink
                    isActive={isAccountActive}
                />

                <ThemeToggle />

                <MobileMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={onMobileMenuToggle}
                />
            </div>

            {/* Cart Drawer */}
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={[]}
            />
        </>
    );
}
