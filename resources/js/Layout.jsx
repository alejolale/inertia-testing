import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

const Layout = ({children}) => {
    return (
        <>
        <header>
            <nav>
                <InertiaLink href='/'>Accueil</InertiaLink>
                <InertiaLink href='/demo'>Demo</InertiaLink>
                <InertiaLink href='/test'>Test</InertiaLink>
            </nav>
        </header>

        {children}
        </>
    );
};

export default Layout;
