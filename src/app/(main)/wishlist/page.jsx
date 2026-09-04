import EmptyWishlistState from '@/components/wishlist/EmptyWishlistState';
import WishlistBanner from '@/components/wishlist/WishlistBanner';
import React from 'react';

const page = () => {
    return (
        <div>
            <WishlistBanner />
            <EmptyWishlistState />
        </div>
    );
};

export default page;
