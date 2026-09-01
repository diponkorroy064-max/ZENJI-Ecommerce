import CollectionBanner from '@/components/collection/CollectionBanner';
import CollectionProductGrid from '@/components/collection/CollectionProductGrid';
import React from 'react';

const CollectionPage = () => {
    return (
        <div>
            <CollectionBanner />
            <CollectionProductGrid />
        </div>
    );
};

export default CollectionPage;