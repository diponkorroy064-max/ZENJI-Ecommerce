import SearchBox from './SearchBox';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';
import AccountLink from './AccountLink';
import MobileMenuButton from './MobileMenuButton';

import ThemeToggle from '@/components/ThemeToggle';

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
    return (
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
                onOpen={onCartOpen}
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
    );
}
