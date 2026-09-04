import DropBanner from '@/components/drop/DropBanner';
import DropCountdown from '@/components/drop/DropCountdown';
import OriginDropGrid from '@/components/drop/OriginDropGrid';
import WaitlistSection from '@/components/drop/WaitlistSection';
import React from 'react';


const DropPage = () => {
    return (
        <div>
            <DropBanner />
            <DropCountdown />
            <WaitlistSection />
            <OriginDropGrid />
        </div>
    );
};

export default DropPage;

