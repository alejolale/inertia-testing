import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

const Nav = () => {
    return (
        <header>
            <nav>
                <InertiaLink href='/'>Accueil</InertiaLink>
                <InertiaLink href='/demo'>Demo</InertiaLink>
                <InertiaLink href='/test'>Test</InertiaLink>
            </nav>
        </header>
    );
};

export default Nav;
