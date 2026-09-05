'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

export default function LookbookCard({ item }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative w-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-200">
            
            <Link href={item.href || '#'} className="block relative w-full aspect-3/4">
                <Image src={item.imageUrl[0]?.image} alt={item.title || 'Lookbook Image'} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"/>

                {/* Subtle Hover Gradient & Overlay Tag */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                    <span className="text-[10px] font-mono tracking-widest text-white uppercase bg-black/80 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-zinc-700">
                        {item.title || 'VIEW PRODUCT →'}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
