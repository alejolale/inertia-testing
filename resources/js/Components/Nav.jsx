import React from 'react';
import {Link} from "@inertiajs/inertia-react";

const Nav = () => {
    return (
        <header>
            <nav>
                <Link href='/'>Accueil</Link>
                <Link href='/demo'>Demo</Link>
                <Link href='/test'>Test</Link>
                <Link href='/logout' method='post' as='button' data={{foo: 'Log out information'}} >Logout</Link>
            </nav>
        </header>
    );
};

export default Nav;
