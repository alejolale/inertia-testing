import React from 'react';
import Layout from "../Layout";
import Nav from "../Components/Nav";

function Home ({name}) {
    return <div>
        <Nav />
        <h1 className={'bg-green-600'}>Hello {name}</h1>
    </div>
}

//Home.layout = (page) => <Layout children={page} />

export default Home;
