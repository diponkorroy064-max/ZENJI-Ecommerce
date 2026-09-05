import EmptyWishlistState from '@/components/wishlist/EmptyWishlistState';
import WishlistBanner from '@/components/wishlist/WishlistBanner';

import React from 'react';

const WishListPage = async () => {
    // const session = 
    // console.log("session from wishlist", session);
   

    return (
        <div>
            <WishlistBanner />
            <EmptyWishlistState />
        </div>
    );
};

export default WishListPage;
