import LookbookGridSection from '@/components/look-book/LookbookGridSection';
import LookbookHeroSection from '@/components/look-book/LookbookHeroSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <LookbookHeroSection />
            <LookbookGridSection />
        </div>
    );
};

export default page;