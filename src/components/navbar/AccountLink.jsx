'use client';
import Link from 'next/link';
import { User, LogOut, UserCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';


export default function AccountLink({ isActive }) {
    const { data, isPending } = authClient.useSession();
    // console.log('AccountLink session data:', data);
    const user = data?.user;
    // console.log('AccountLink user:', user);
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.refresh();
    };

    if (isPending) {
        return (
            <div className="w-6 h-6 animate-pulse bg-zinc-300 dark:bg-zinc-800 rounded-full" />
        );
    }


    if (!user) {
        return (
            <Link
                href="/auth/signin"
                aria-label="Account"
                className={`p-1 transition-colors flex items-center ${isActive
                        ? 'text-red-600 dark:text-red-600'
                        : 'text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-600'
                    }`}
            >
                <User size={20} />
            </Link>
        );
    }


    // 2. If user IS logged in: Show User Name + Hover Dropdown + Points Badge
    return (
        <div className="flex items-center gap-3 font-mono">
            {/* User Info with Hover Dropdown */}
            <div className="relative group py-2">
                <button type="button" className="flex items-center gap-2 text-red-600 dark:text-red-600 hover:opacity-80 transition-opacity uppercase font-bold tracking-wider text-xs md:text-sm cursor-pointer">
                    <User size={18} className="text-red-600" />
                    <span>{user?.name || 'USER'}</span>
                </button>

                {/* Dropdown Menu (Opens on Hover) */}
                <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-800 shadow-2xl z-50 transition-all duration-150">
                    {/* User Email Section */}
                    <div className="p-3 border-b border-zinc-200 dark:border-zinc-800">
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate uppercase tracking-tight font-medium">
                            {user?.email}
                        </p>
                    </div>

                    {/* Account Settings Link */}
                    <Link href="/account" className="flex items-center gap-2 px-4 py-3 text-xs tracking-widest uppercase font-bold text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                        <UserCheck size={14} />
                        <span>ACCOUNT</span>
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleSignOut}
                        type="button"
                        className="w-full text-left flex items-center gap-2 px-4 py-3 text-xs tracking-widest uppercase font-bold text-red-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer border-t border-zinc-200 dark:border-zinc-800">
                        <LogOut size={14} />
                        <span>LOGOUT</span>
                    </button>
                </div>
            </div>

            {/* Polygon / Sci-Fi Styled Points Counter */}
            <div className="relative flex items-center gap-2 px-3 py-1 bg-black/40 border border-amber-500/60 text-amber-400 font-bold text-xs tracking-widest shadow-[0_0_10px_rgba(245,158,11,0.15)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
                <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-[10px] font-black text-amber-300">
                    🪙
                </div>
                <span>{user?.points ?? 250}</span>
            </div>
        </div>
    );
}

