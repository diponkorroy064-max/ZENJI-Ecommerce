'use client';

import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewList from "@/components/reviews/ReviewList";
import ReviewSummary from "@/components/reviews/ReviewSummary";


export default function ReviewsPage() {
    // Sample review data to pass into components
    const sampleReviewsData = {
        rating: 0,
        totalReviews: 0,
        breakdown: [0, 0, 0, 0, 0],
        publishedReviews: 0,
        averageRating: '-',
        fiveStarPercent: 0,
        recommendPercent: 0,
        reviewsList: []
    };

    const handleReviewSubmit = (newReviewData) => {
        console.log('Submitted Review Data:', newReviewData);
        // Handle API submission or state update here
    };

    return (
        <main className="bg-white dark:bg-black min-h-screen transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* 1. Review Header & Summary Section */}
                <ReviewSummary
                    rating={sampleReviewsData.rating}
                    totalReviews={sampleReviewsData.totalReviews}
                    breakdown={sampleReviewsData.breakdown}
                    publishedReviews={sampleReviewsData.publishedReviews}
                    averageRating={sampleReviewsData.averageRating}
                    fiveStarPercent={sampleReviewsData.fiveStarPercent}
                    recommendPercent={sampleReviewsData.recommendPercent}
                />

                {/* 2. Filter, Sort, & List Section */}
                <ReviewList reviews={sampleReviewsData.reviewsList} />

                {/* 3. Leave Your Verdict Form Section */}
                <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
        </main>
    );
}
