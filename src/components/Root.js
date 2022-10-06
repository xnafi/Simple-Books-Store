import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header'

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}
