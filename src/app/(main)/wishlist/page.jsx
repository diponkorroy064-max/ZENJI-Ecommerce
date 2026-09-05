import React from 'react';
import { redirect } from 'next/navigation';
import EmptyWishlistState from '@/components/wishlist/EmptyWishlistState';
import WishlistBanner from '@/components/wishlist/WishlistBanner';
import { getUserSession } from '@/lib/api/session';


const WishListPage = async () => {
    const loggedInUser = await getUserSession();
    console.log('session from wishlist', loggedInUser);

    // 2. If user is logged in, redirect them to the account page (or account/wishlist)
    if (loggedInUser) {
        redirect('/account');
    }

    return (
        <div>
            <WishlistBanner />
            <EmptyWishlistState />
        </div>
    );
};

export default WishListPage;
