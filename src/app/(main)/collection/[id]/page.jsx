'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Plus, Minus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { COLLECTION_PRODUCTS } from '@/data/products';

export default function ProductDetailsPage() {
    const { id } = useParams();

    const product = COLLECTION_PRODUCTS.find((p) => p.id === id);
    const item = product || {};

    // Extract string image URLs safely whether item is string or { image: "..." } object
    const rawImages = Array.isArray(item.imageUrl)
        ? item.imageUrl
        : item.imageUrl
            ? [item.imageUrl]
            : [];

    const images = rawImages.map((img) =>
        typeof img === 'object' && img !== null ? img.image : img
    );

    // Fallbacks for missing sizes and descriptions
    const sizes = item.sizes || [
        { label: 'XS', disabled: true },
        { label: 'S', disabled: false },
        { label: 'M', disabled: false },
        { label: 'L', disabled: false },
        { label: 'XL', disabled: false },
        { label: 'XXL', disabled: true },
    ];

    const description = item.description || [
        'Discipline forged in silence. Every stitch a vow.',
        '240gsm heavyweight cotton.',
        'Oversized fit. Garment washed.',
        'Anime graphic screenprint.',
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState('S');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleWheelScroll = (e) => {
        if (images.length <= 1) return;
        e.preventDefault();

        if (e.deltaY > 0) {
            setSelectedImageIndex((prev) => (prev + 1) % images.length);
        } else if (e.deltaY < 0) {
            setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const toggleAccordion = (section) => {
        setActiveAccordion((prev) => (prev === section ? null : section));
    };

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
                <h1 className="text-2xl font-black uppercase tracking-wider mb-4">Product Not Found</h1>
                <Link
                    href="/collection"
                    className="text-xs font-mono tracking-widest text-red-600 hover:underline uppercase"
                >
                    ← Return to Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

                {/* Back Link */}
                <div className="mb-6">
                    <Link
                        href="/collection"
                        className="inline-flex items-center text-xs font-mono tracking-widest text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white uppercase transition-colors"
                    >
                        ← BACK
                    </Link>
                </div>

                {/* Main Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* Left Column: Image Gallery Viewport */}
                    <div className="lg:col-span-7 flex flex-col space-y-4">

                        {/* Hover Wheel Scroll Container */}
                        <div
                            onWheel={handleWheelScroll}
                            className="relative w-full aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden cursor-ns-resize group"
                        >
                            <img
                                src={images[selectedImageIndex] || '/images/products/placeholder.jpg'}
                                alt={`${item.name || 'Product'} image ${selectedImageIndex + 1}`}
                                className="w-full h-full object-cover object-center transition-all duration-300"
                            />

                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-xs pointer-events-none">
                                SCROLL TO CYCLE
                            </div>
                        </div>

                        {/* Thumbnail Row */}
                        <div className="grid grid-cols-5 gap-3">
                            {images.map((imgUrl, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`relative aspect-square border overflow-hidden transition-all ${selectedImageIndex === index
                                            ? 'border-black dark:border-white ring-1 ring-black dark:ring-white'
                                            : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={imgUrl}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details & Actions */}
                    <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-8">

                        <div>
                            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                                {item.category} / {item.name}
                            </p>
                            <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-zinc-900 dark:text-white">
                                {item.name}
                            </h1>
                            {item.colorway && (
                                <p className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mt-2">
                                    COLORWAY: {item.colorway}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">
                                {item.salePrice || item.originalPrice}
                            </div>
                            <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-500 uppercase">
                                <span className="h-2 w-2 rounded-full bg-amber-500 inline-block"></span>
                                <span>{item.stockStatus || 'IN STOCK'}</span>
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="space-y-3 pt-2">
                            <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase block">
                                SELECT SIZE
                            </span>

                            <div className="grid grid-cols-6 gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size.label}
                                        type="button"
                                        disabled={size.disabled}
                                        onClick={() => setSelectedSize(size.label)}
                                        className={`h-11 border text-sm font-mono transition-colors flex items-center justify-center relative ${size.disabled
                                                ? 'border-zinc-200 dark:border-zinc-800 text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
                                                : selectedSize === size.label
                                                    ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-bold'
                                                    : 'border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-black dark:hover:border-white'
                                            }`}
                                    >
                                        <span className={size.disabled ? 'line-through' : ''}>
                                            {size.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions CTA Buttons */}
                        <div className="flex items-center gap-3 pt-4">
                            <button
                                type="button"
                                className="flex-1 h-12 border border-zinc-300 dark:border-zinc-700 hover:border-black dark:hover:border-white text-zinc-900 dark:text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                            >
                                <Heart size={16} />
                                <span>WISHLIST</span>
                            </button>

                            <button
                                type="button"
                                className="flex-1 h-12 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center transition-colors"
                            >
                                ADD TO CART →
                            </button>
                        </div>

                        {/* Product Details Section */}
                        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
                                PRODUCT DETAILS
                            </h2>
                            <ul className="text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                                {description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Accordion Controls */}
                        <div className="border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">

                            {/* SIZE GUIDE ACCORDION */}
                            <div className="py-4">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion('size-guide')}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="text-sm font-black tracking-widest uppercase text-zinc-900 dark:text-white">
                                        SIZE GUIDE
                                    </span>
                                    <div className="w-8 h-8 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-red-600 dark:text-red-500">
                                        {activeAccordion === 'size-guide' ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>

                                {activeAccordion === 'size-guide' && (
                                    <div className="mt-6 space-y-4">
                                        {/* Measurement Table */}
                                        <div className="border border-zinc-200 dark:border-zinc-800 overflow-x-auto">
                                            <table className="w-full text-left border-collapse text-xs font-mono">
                                                <thead>
                                                    <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                                                        <th className="py-2.5 px-3 uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-normal">SIZE</th>
                                                        <th className="py-2.5 px-3 uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-normal">CHEST (FLAT)</th>
                                                        <th className="py-2.5 px-3 uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-normal">LENGTH</th>
                                                        <th className="py-2.5 px-3 uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-normal">SHOULDER</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                                    {[
                                                        { size: 'XS', chest: '42', length: '66', shoulder: '42' },
                                                        { size: 'S', chest: '47', length: '68', shoulder: '44' },
                                                        { size: 'M', chest: '52', length: '70', shoulder: '46' },
                                                        { size: 'L', chest: '57', length: '72', shoulder: '48' },
                                                        { size: 'XL', chest: '62', length: '74', shoulder: '50' },
                                                        { size: 'XXL', chest: '67', length: '76', shoulder: '52' },
                                                    ].map((row) => (
                                                        <tr key={row.size} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                                                            <td className="py-2.5 px-3 font-bold text-red-600 dark:text-red-500">{row.size}</td>
                                                            <td className="py-2.5 px-3 text-zinc-600 dark:text-zinc-400">{row.chest}</td>
                                                            <td className="py-2.5 px-3 text-zinc-600 dark:text-zinc-400">{row.length}</td>
                                                            <td className="py-2.5 px-3 text-zinc-600 dark:text-zinc-400">{row.shoulder}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Callout Notice */}
                                        <div className="border-l-2 border-red-600 dark:border-red-500 bg-zinc-50 dark:bg-zinc-900/40 p-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wide leading-relaxed">
                                            OVERSIZED FIT – SIZE DOWN IF BETWEEN SIZES. GARMENT MEASUREMENTS IN CM.
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* SHIPPING & RETURNS ACCORDION */}
                            <div className="py-4">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion('shipping')}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="text-sm font-black tracking-widest uppercase text-zinc-900 dark:text-white">
                                        SHIPPING & RETURNS
                                    </span>
                                    <div className="w-8 h-8 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-red-600 dark:text-red-500">
                                        {activeAccordion === 'shipping' ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>

                                {activeAccordion === 'shipping' && (
                                    <div className="mt-6 text-xs font-mono text-zinc-500 dark:text-zinc-400 space-y-2 leading-relaxed">
                                        <p>Free shipping Australia-wide on orders over A$100.</p>
                                        <p>Standard delivery: 3-5 business days.</p>
                                        <p>Express: 1-2 business days.</p>
                                        <p>Returns accepted within 14 days, unworn.</p>
                                    </div>
                                )}
                            </div>

                        </div>

                        {item.sku && (
                            <div className="pt-2 text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                                SKU: {item.sku}
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}

