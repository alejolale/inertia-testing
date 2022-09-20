import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import Nav from "../Components/Nav";

const Layout = ({children}) => {
    return (
        <>
            <header className='bg-gray-100'>
                <Nav />
            </header>

            <section className='p-4 max-w-3xl mx-auto'>
                {children}
            </section>
        </>
    );
};

export default Layout;
