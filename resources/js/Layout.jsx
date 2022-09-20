import React from 'react';
import {Link} from "@inertiajs/inertia-react";

const Layout = ({children}) => {
    return (
        <>
        <header>
            <nav>
                <Link href='/'>Accueil</Link>
                <Link href='/demo'>Demo</Link>
                <Link href='/test'>Test</Link>
            </nav>
        </header>

        {children}
        </>
    );
};

export default Layout;
