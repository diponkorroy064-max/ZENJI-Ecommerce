'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ReviewList({ reviews = [] }) {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [sortOption, setSortOption] = useState('NEWEST FIRST');

    const filterOptions = ['ALL', '5★', '4★', '3★', 'VERIFIED'];

    return (
        <section className="w-full bg-white dark:bg-black text-black dark:text-white font-mono py-8 transition-colors duration-200">
            {/* Filter and Sort Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                    {filterOptions.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-colors ${activeFilter === tab
                                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                    : 'bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Sort Selector */}
                <div className="relative inline-block text-left">
                    <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
                        <span>{sortOption}</span>
                        <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Results Count Counter */}
            <div className="text-[11px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase mb-12">
                SHOWING {reviews.length} OF {reviews.length}
            </div>

            {/* Empty or Populated List View */}
            {reviews.length === 0 ? (
                <div className="py-12 text-sm text-zinc-500 dark:text-zinc-500 tracking-wider">
                    No reviews published yet. Be the first.
                </div>
            ) : (
                <div className="space-y-6">
                    {reviews.map((rev, index) => (
                        <div
                            key={index}
                            className="p-6 border border-zinc-200 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/30 space-y-2"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm">{rev.author}</span>
                                <span className="text-xs text-zinc-500">{rev.date}</span>
                            </div>
                            <div className="text-red-600 text-xs">{'★'.repeat(rev.rating)}</div>
                            <h4 className="font-bold text-sm tracking-wide">{rev.title}</h4>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {rev.comment}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
