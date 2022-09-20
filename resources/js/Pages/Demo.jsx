import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";

const Demo = ({time}) => {
    return (
        <Layout>
            <p>Hey demo</p>
            <div className='mt-[1400px]'>
                <p>time is :  {time}</p>
                <Link href='/demo' preserveScroll className='text-blue-500' >go to demo</Link>
            </div>
        </Layout>
    );
};

export default Demo;
