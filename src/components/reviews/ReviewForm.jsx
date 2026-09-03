'use client';

import { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function ReviewForm({ onSubmit }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: '',
        orderNumber: '',
        title: '',
        review: ''
    });

    const tagOptions = [
        'TRUE TO SIZE',
        'RUNS SMALL',
        'RUNS LARGE',
        'PREMIUM QUALITY',
        'FAST SHIPPING',
        'GREAT PACKAGING',
        'WORTH THE WAIT'
    ];

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ ...formData, rating, tags: selectedTags });
        }
    };

    return (
        <section className="w-full bg-white dark:bg-black text-black dark:text-white font-mono py-8 transition-colors duration-200">
            {/* Form Border Container */}
            <div className="border border-red-600 dark:border-red-600 p-6 sm:p-10 bg-white dark:bg-black">

                {/* Form Header */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight font-sans text-black dark:text-white">
                        LEAVE YOUR VERDICT
                    </h2>
                    <p className="text-[10px] tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mt-1">
                        VERIFIED PURCHASES ONLY
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                NAME
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="FIRST L."
                                required
                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="YOU@EMAIL.COM"
                                required
                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 2: Product & Order Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                PRODUCT PURCHASED
                            </label>
                            <select
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            >
                                <option value="">SELECT A PIECE</option>
                                <option value="BLUE FLAME TEE">BLUE FLAME TEE</option>
                                <option value="CYBER HOODIE">CYBER HOODIE</option>
                                <option value="ORIGIN CARGO">ORIGIN CARGO</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                                ORDER NUMBER
                            </label>
                            <input
                                type="text"
                                name="orderNumber"
                                value={formData.orderNumber}
                                onChange={handleChange}
                                placeholder="ZJ-000000"
                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 3: Interactive Star Rating */}
                    <div className="space-y-2 pt-2">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            STAR RATING
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="p-1 focus:outline-none"
                                    >
                                        <Star
                                            size={20}
                                            className={`${star <= (hoverRating || rating)
                                                    ? 'fill-zinc-800 text-zinc-800 dark:fill-zinc-200 dark:text-zinc-200'
                                                    : 'fill-zinc-200 text-zinc-200 dark:fill-zinc-800 dark:text-zinc-800'
                                                } transition-colors`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <span className="text-[10px] tracking-widest text-zinc-400 uppercase">
                                {rating > 0 ? `${rating} OUT OF 5` : 'SELECT A RATING'}
                            </span>
                        </div>
                    </div>

                    {/* Row 4: Review Title */}
                    <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            REVIEW TITLE
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="SUM IT UP IN A LINE"
                            required
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors"
                        />
                    </div>

                    {/* Row 5: Detailed Review */}
                    <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            YOUR REVIEW
                        </label>
                        <textarea
                            name="review"
                            rows={5}
                            value={formData.review}
                            onChange={handleChange}
                            placeholder="FIT, FABRIC, PRINT, SHIPPING — TELL US EVERYTHING."
                            required
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-4 text-xs tracking-wider uppercase text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors resize-none"
                        />
                    </div>

                    {/* Row 6: Feature Tags */}
                    <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-zinc-500 uppercase block">
                            TAGS (OPTIONAL)
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {tagOptions.map((tag) => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-2 text-[10px] tracking-wider uppercase border transition-colors ${isSelected
                                                ? 'bg-red-600 text-white border-red-600'
                                                : 'bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-zinc-500'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-colors font-sans"
                        >
                            <span>SUBMIT REVIEW</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
