'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

export default function ProductCard({ product }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-white border border-zinc-900 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            <Link href={product.href} className="block relative flex-1">
                {/* Sale Ribbon Badge */}
                {product.discount && (
                    <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                        <div className="absolute top-4 -left-10 w-40 bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest -rotate-45 shadow-md">
                            {product.discount}
                        </div>
                    </div>
                )}

                {/* Product Image Stage */}
                <div className="relative w-full aspect-[4/5] bg-zinc-100 overflow-hidden border-b border-zinc-900">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Quick View Bar Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-black/90 text-white text-xs tracking-widest py-3 px-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="font-bold uppercase font-mono">QUICK VIEW</span>
                        <span className="text-red-500 font-bold">→</span>
                    </div>
                </div>

                {/* Details Container */}
                <div className="p-4 bg-white flex flex-col space-y-2 min-h-[110px]">
                    <h3 className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-black font-mono group-hover:text-red-600 transition-colors line-clamp-1">
                        {product.name}
                    </h3>

                    <div className="flex flex-col font-mono">
                        {product.originalPrice && (
                            <span className="text-xs text-zinc-400 line-through tracking-wider">
                                {product.originalPrice}
                            </span>
                        )}
                        <span className={`text-xl font-extrabold tracking-tighter ${product.discount ? 'text-red-600' : 'text-black'}`}>
                            {product.salePrice}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Action Footer (Wishlist + Add To Cart) */}
            <div className="flex items-center border-t border-zinc-900 bg-white font-mono text-xs">
                <button
                    type="button"
                    aria-label="Add to Wishlist"
                    className="flex items-center justify-center gap-1 px-3 py-3 border-r border-zinc-900 text-black hover:bg-zinc-100 transition-colors"
                >
                    <Heart size={14} className="text-zinc-600" />
                    <span className="hidden xl:inline uppercase text-[10px] tracking-wider font-semibold">WISHLIST</span>
                </button>

                <button
                    type="button"
                    className="flex-1 bg-black text-white hover:bg-red-600 font-bold uppercase py-3 px-4 tracking-wider transition-colors flex items-center justify-center gap-1"
                >
                    <span>ADD TO CART</span>
                    <span>→</span>
                </button>
            </div>
        </motion.div>
    );
}
