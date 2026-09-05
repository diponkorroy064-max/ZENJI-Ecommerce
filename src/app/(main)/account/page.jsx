import React from 'react';
import AccountPageClient from './AccountPageClient';
import { getUserSession } from '@/lib/api/session';


const AccountPage = async () => {
    const loggedInUser = await getUserSession();
    console.log('session from account', loggedInUser);

    return (
        <>
            <AccountPageClient user={loggedInUser} />
        </>
    );
};

export default AccountPage;
