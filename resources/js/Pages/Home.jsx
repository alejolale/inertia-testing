import React from 'react';
import { Head } from '@inertiajs/inertia-react'

function Home ({name}) {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <h1 >Hello {name}</h1>
    </>
}

export default Home;
