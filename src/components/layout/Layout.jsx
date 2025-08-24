
import React from 'react';
import Background from '../../Background';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
        <Background />
        {children}
        <Footer />
        </>
    );
};

export default Layout;