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
                <div className='mb-6'>
                    <iframe
                        height="200px"
                        width="100%"
                        frameBorder="no"
                        scrolling="no"
                        seamless
                        src="https://player.simplecast.com/b83b0a3a-c934-480e-af5d-3007fccd57b6?dark=false">
                    </iframe>
                </div>
                {children}
            </section>
        </>
    );
};

export default Layout;
