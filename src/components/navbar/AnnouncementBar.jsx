import { ANNOUNCEMENT_ITEMS } from '@/constants/navigation';
import Marquee from 'react-fast-marquee';

export default function AnnouncementBar({ isVisible }) {
    const repeatedItems = [
        ...ANNOUNCEMENT_ITEMS,
        ...ANNOUNCEMENT_ITEMS,
        ...ANNOUNCEMENT_ITEMS,
    ];

    return (
        <div className={`bg-red-600 text-white overflow-hidden`}>
            <Marquee pauseOnHover={false} speed={60}>
            <div className="flex w-max whitespace-nowrap py-1.5 font-mono text-xs font-bold tracking-widest uppercase animate-marquee-right">
                {repeatedItems.map((text, index) => (
                    <span
                        key={`${text}-${index}`}
                        className="mx-6 flex items-center gap-4"
                    >
                        <span>•</span>
                        <span>{text}</span>
                    </span>
                ))}
                </div>
            </Marquee>
        </div>
    );
}

