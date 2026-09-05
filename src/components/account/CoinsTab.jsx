import React from 'react';

const CoinsTab = ({ coins = 500 }) => {
    const historyData = [
        { date: '05 SEPT 2026', event: 'DAILY LOGIN\nDaily Login bonus', coins: '+250', balance: 500 },
        { date: '04 SEPT 2026', event: 'DAILY LOGIN\nDaily Login bonus', coins: '+250', balance: 250 },
    ];

    const earnRules = [
        { title: 'LOGIN DAILY', desc: 'First login each day', reward: '+250' },
        { title: 'WRITE A REVIEW', desc: 'Once per review', reward: '+100' },
        { title: 'ADD PHOTO TO REVIEW', desc: 'Once per review', reward: '+100' },
        { title: 'COMPLETE PROFILE', desc: 'Once per account', reward: '+500' },
        { title: 'EVERY PURCHASE', desc: 'Per A$1 spent', reward: '+10' },
    ];

    return (
        <div className="space-y-12">
            {/* 1. ZENJI COIN BANNER */}
            <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                    ZENJI COIN
                </h3>
                <p className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    Earn coins for showing up, reviewing and buying. 100 coins = A$1.
                </p>

                <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 p-8 flex flex-col items-center justify-center text-center gap-3 rounded-sm">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                        CURRENT BALANCE
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950 font-black text-xl shadow-md">
                            🪙
                        </div>
                        <span className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight">
                            {coins}
                        </span>
                    </div>
                    <p className="font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300">
                        Worth A${(coins / 100).toFixed(2)}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pt-2">
                        LIFETIME EARNED — {coins}
                    </p>
                </div>
            </div>

            {/* 2. HISTORY TABLE */}
            <div className="space-y-4">
                <h4 className="text-xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    HISTORY
                </h4>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                        <thead>
                            <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                                <th className="py-3 px-2">DATE</th>
                                <th className="py-3 px-2">EVENT</th>
                                <th className="py-3 px-2 text-right">COINS</th>
                                <th className="py-3 px-2 text-right">BALANCE</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {historyData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="py-4 px-2 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">{row.date}</td>
                                    <td className="py-4 px-2 text-zinc-900 dark:text-white whitespace-pre-line font-bold">{row.event}</td>
                                    <td className="py-4 px-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">{row.coins}</td>
                                    <td className="py-4 px-2 text-right text-zinc-900 dark:text-white font-bold">{row.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 3. HOW TO EARN */}
            <div className="space-y-4">
                <h4 className="text-xl font-black uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    HOW TO EARN
                </h4>

                <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                    {earnRules.map((rule, idx) => (
                        <div key={idx} className="py-4 flex items-center justify-between gap-4">
                            <div>
                                <p className="font-bold uppercase text-sm text-zinc-900 dark:text-white">{rule.title}</p>
                                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{rule.desc}</p>
                            </div>
                            <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                {rule.reward}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 pt-2">
                    Coins are credited automatically. 100 coins are worth A$1 off a future order.
                </p>
            </div>
        </div>
    );
};

export default CoinsTab;

