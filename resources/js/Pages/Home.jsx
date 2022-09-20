import React from 'react';
import Layout from "../Layouts/Layout";

function Home ({name}) {
    return <>
        <h1 >Hello {name}</h1>
    </>
}

Home.layout = (page) => <Layout children={page} />

export default Home;
