import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";

const Demo = ({time}) => {
    return (
        <>
            <p>Hey demo</p>
            <div className='mt-[1400px]'>
                <p>time is :  {time}</p>
                <Link href='/demo' preserveScroll className='text-blue-500' >go to demo</Link>
            </div>
        </>
    );
};

Demo.layout = (page) => <Layout children={page} />

export default Demo;
