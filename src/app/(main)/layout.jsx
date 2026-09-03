import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};

export default layout;
