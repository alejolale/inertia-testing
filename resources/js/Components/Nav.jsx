import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import clsx from "clsx";

const Nav = () => {

    // Two approaches to get page props
    const {url, component} = usePage()

    return (
        <nav className='flex p-4 justify-between'>
            <h1 className='mr-10'>App</h1>
            <ul className='space-x-6'>
                {/* We can use the component name to compare or url but attention to composed urls like /demo?hey=asjzoiio */}
                <Link href='/' className={clsx(component === 'Home' && 'text-red-500 underline')}>Accueil</Link>
                <Link href='/demo' className={clsx(url.startsWith('/demo') && 'text-red-500 underline')}>Demo</Link>
                <Link href='/test' className={clsx(url === '/test' && 'text-red-500 underline')}>Test</Link>
                <Link href='/logout' method='post' as='button' data={{foo: 'Log out information'}} >Logout</Link>
            </ul>
        </nav>
    );
};

export default Nav;
