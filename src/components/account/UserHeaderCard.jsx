import React from 'react';

const UserHeaderCard = ({ user }) => {
    // Extract initials (e.g. "Diponkor Roy" -> "DR")
    const initials = user?.name
        ? user.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
        : 'DR';

    return (
        <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-colors">
            <div className="flex items-center gap-5">
                {/* Avatar Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-widest rounded-sm shadow-md">
                    {initials}
                </div>

                {/* User Info */}
                <div className="space-y-1">
                    <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                        {user?.name || 'DIPONKOR ROY'}
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                        {user?.email || 'diponkorroy064@gmail.com'}
                    </p>
                    <p className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        MEMBER SINCE — {user?.memberSince || '2026'}
                    </p>
                </div>
            </div>

            {/* Zenji Coins Widget */}
            <div className="flex items-center gap-3 bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-sm shadow-inner self-stretch sm:self-auto justify-center">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950 font-black text-xs">
                    🪙
                </div>
                <span className="font-mono font-bold text-lg text-white">
                    {user?.coins ?? 500}
                </span>
            </div>
        </div>
    );
};

export default UserHeaderCard;
