'use client';

import { Star } from 'lucide-react';

export default function ReviewSummary({
    rating = 0,
    totalReviews = 0,
    breakdown = [0, 0, 0, 0, 0],
    publishedReviews = 0,
    averageRating = '-',
    fiveStarPercent = 0,
    recommendPercent = 0
}) {
    return (
        <section className="w-full bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-200 pb-12 border-b border-zinc-200 dark:border-zinc-900">
            {/* Header Title */}
            <div className="mb-10">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-white font-sans">
                    REVIEWS
                </h1>
                <p className="text-red-600 font-bold text-xs tracking-widest uppercase mt-1">
                    WHAT THE COMMUNITY SAYS
                </p>
                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-900 mt-6" />
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Rating Score Breakdown */}
                <div className="lg:col-span-3 space-y-3">
                    <div className="text-4xl font-extrabold tracking-tight">
                        {rating > 0 ? rating.toFixed(1) : '-'}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                        OUT OF 5
                    </div>

                    {/* Star Icons */}
                    <div className="flex items-center gap-1 text-zinc-300 dark:text-zinc-800">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={18}
                                className={
                                    star <= Math.round(rating)
                                        ? 'fill-red-600 text-red-600'
                                        : 'fill-current'
                                }
                            />
                        ))}
                    </div>

                    <div className="text-xs text-zinc-500 dark:text-zinc-500">
                        Based on {totalReviews} reviews
                    </div>
                </div>

                {/* Rating Bars */}
                <div className="lg:col-span-5 space-y-2 py-1">
                    {[5, 4, 3, 2, 1].map((stars, idx) => {
                        const count = breakdown[5 - stars] || 0;
                        const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

                        return (
                            <div key={stars} className="flex items-center gap-3 text-xs tracking-wider">
                                <span className="w-6 text-zinc-600 dark:text-zinc-400 flex items-center gap-0.5">
                                    {stars}<span className="text-[10px]">★</span>
                                </span>

                                <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                                    <div
                                        className="h-full bg-zinc-800 dark:bg-zinc-300 transition-all duration-300"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>

                                <span className="w-10 text-right text-zinc-500 dark:text-zinc-500">
                                    {percentage}%
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Key Metric Cards */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                    <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-50/50 dark:bg-zinc-950/50">
                        <div className="text-2xl md:text-3xl font-black font-sans">
                            {publishedReviews}
                        </div>
                        <div className="text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                            PUBLISHED REVIEWS
                        </div>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-50/50 dark:bg-zinc-950/50">
                        <div className="text-2xl md:text-3xl font-black font-sans">
                            {averageRating}
                        </div>
                        <div className="text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                            AVERAGE RATING
                        </div>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-50/50 dark:bg-zinc-950/50">
                        <div className="text-2xl md:text-3xl font-black font-sans">
                            {fiveStarPercent}%
                        </div>
                        <div className="text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                            FIVE STAR
                        </div>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-50/50 dark:bg-zinc-950/50">
                        <div className="text-2xl md:text-3xl font-black font-sans">
                            {recommendPercent}%
                        </div>
                        <div className="text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                            RECOMMEND
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
