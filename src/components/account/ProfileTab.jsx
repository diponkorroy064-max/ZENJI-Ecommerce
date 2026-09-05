import React from 'react';


const ProfileTab = ({ user }) => {
    const nameParts = (user?.name || 'Diponkor Roy').split(' ');
    const firstName = nameParts[0] || 'Diponkor';
    const lastName = nameParts.slice(1).join(' ') || 'Roy';

    return (
        <div className="space-y-12">
            {/* 1. DETAILS FORM SECTION */}
            <div className="space-y-6">
                <h3 className="text-xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    DETAILS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            FIRST NAME
                        </label>
                        <input
                            type="text"
                            readOnly
                            value={firstName}
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            LAST NAME
                        </label>
                        <input
                            type="text"
                            readOnly
                            value={lastName}
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            readOnly
                            value={user?.email || 'diponkorroy064@gmail.com'}
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            PHONE
                        </label>
                        <input
                            type="text"
                            readOnly
                            value={user?.phone || '+880 1234 567890'}
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none cursor-not-allowed"
                        />
                    </div>
                </div>

                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    Details are read-only for now. Email support to change them.
                </p>
            </div>

            {/* 2. AT A GLANCE SUMMARY SECTION */}
            <div className="space-y-6">
                <h3 className="text-xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    AT A GLANCE
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between h-36">
                        <span className="text-4xl font-black text-zinc-900 dark:text-white">
                            {user?.orderCount ?? 0}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                            ORDERS
                        </span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between h-36">
                        <span className="text-4xl font-black text-zinc-900 dark:text-white">
                            A${user?.totalSpent ?? '0.00'}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                            SPENT · LAST 50
                        </span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between h-36">
                        <span className="text-4xl font-black text-zinc-900 dark:text-white">
                            {user?.coins ?? 500}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                            COINS EARNED
                        </span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between h-36">
                        <span className="text-4xl font-black text-zinc-900 dark:text-white">
                            {user?.wishlistCount ?? 0}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">
                            WISHLIST
                        </span>
                    </div>
                </div>
            </div>

            {/* 3. RECENT ACTIVITY SECTION */}
            <div className="space-y-6">
                <h3 className="text-xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    RECENT
                </h3>

                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 py-16 px-6 text-center space-y-4">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        NO ORDERS YET
                    </p>

                    <a href="/drop" className="inline-flex items-center gap-2 border border-zinc-900 dark:border-zinc-100 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        SHOP THE DROP <span className="text-red-500">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileTab;

