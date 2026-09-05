"use client";
import React, { useState } from 'react';
import CoinsTab from '@/components/account/CoinsTab';
import UserHeaderCard from '@/components/account/UserHeaderCard';
import ProfileTab from '@/components/account/ProfileTab';
import OrdersTab from '@/components/account/OrdersTab';
import WishlistTab from '@/components/account/WishlistTab';


const AccountPageClient = ({ user }) => {
    const [activeTab, setActiveTab] = useState('PROFILE');

    // Logged-in User Data Context
    const loggedInUser = user || {
        name: 'DIPONKOR ROY',
        email: 'diponkorroy064@gmail.com',
        phone: '+880 1234 567890',
        memberSince: '2026',
        coins: 500,
        orderCount: 0,
        totalSpent: '0.00',
        wishlistCount: 0,
    };

    const tabs = ['PROFILE', 'ORDERS', 'WISHLIST', 'COINS'];

    return (
        <main className="min-h-screen w-full bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300 py-8 px-4 sm:px-8 md:px-12">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* TOP DYNAMIC USER CARD */}
                <UserHeaderCard user={loggedInUser} />

                {/* SUB-NAVIGATION TAB BAR */}
                <div className="border-b border-zinc-200 dark:border-zinc-800">
                    <nav className="flex items-center justify-start gap-8 overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${isActive
                                        ? 'text-red-600 dark:text-red-500'
                                        : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                                        }`}
                                >
                                    {tab}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 dark:bg-red-500" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* TAB CONTENT RENDERER */}
                <div className="pt-4">
                    {activeTab === 'PROFILE' && <ProfileTab user={loggedInUser} />}
                    {activeTab === 'ORDERS' && <OrdersTab />}
                    {activeTab === 'WISHLIST' && <WishlistTab />}
                    {activeTab === 'COINS' && <CoinsTab coins={loggedInUser.coins} />}
                </div>

            </div>
        </main>
    );
};

export default AccountPageClient;
