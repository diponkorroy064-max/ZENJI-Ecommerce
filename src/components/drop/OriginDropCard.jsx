import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function OriginDropCard({ product }) {
    const { id, name, originalPrice, salePrice, discount, imageUrl} = product || {};
    const mainImage = Array.isArray(imageUrl) ? imageUrl[0]?.image : imageUrl;


    return (
        <Link href={`/collection/${product?.id}`} className="group block w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-900 dark:hover:border-zinc-100 overflow-hidden">

            {/* Image Container with Diagonal Badge */}
            <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                {/* Diagonal Discount Ribbon */}
                {discount && (
                    <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden z-10 pointer-events-none">
                        <div className="absolute transform -rotate-45 bg-red-600 text-white font-mono font-black text-[10px] sm:text-xs uppercase tracking-wider text-center py-1 w-44 -left-10 top-5 shadow-md">
                            {discount}
                        </div>
                    </div>
                )}

                {/* Product Image */}
                <Image width={100} height={100}
                    src={mainImage || '/images/products/placeholder.jpg'}
                    alt={name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Card Details */}
            <div className="p-4 sm:p-5 flex flex-col justify-between space-y-2">
                <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight text-zinc-900 dark:text-white line-clamp-1 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                    {name}
                </h3>

                <div className="space-y-0.5">
                    {/* Original Strikethrough Price */}
                    {originalPrice && (
                        <p className="font-mono text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 line-through">
                            {originalPrice}
                        </p>
                    )}

                    {/* Current Sale Price */}
                    <p className="font-mono font-black text-xl sm:text-2xl text-red-600 dark:text-red-500 tracking-tight">
                        {salePrice}
                    </p>
                </div>
            </div>
        </Link>
    );
}

