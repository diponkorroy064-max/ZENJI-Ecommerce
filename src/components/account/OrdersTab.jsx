import Link from 'next/link';
import React from 'react';

const OrdersTab = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                ORDERS
            </h3>

            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 py-24 px-6 text-center space-y-4">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    NO ORDERS YET
                </p>
                <Link
                    href="/drop"
                    className="inline-flex items-center gap-2 border border-zinc-900 dark:border-zinc-100 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                    SHOP THE DROP <span className="text-red-500">→</span>
                </Link>
            </div>
        </div>
    );
};

export default OrdersTab;
