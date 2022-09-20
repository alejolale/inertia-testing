import React from 'react';
import {Head, Link} from "@inertiajs/inertia-react";

const Demo = ({time}) => {
    return (
        <>
            <Head>
                <title>Demo</title>
                {/* if we overrides it on other component like header we must use headKey to prevent multiple metas */}
                <meta type='description' content='Home information' headKey='description'/>
            </Head>
            <p>Hey demo</p>
            <div className='mt-[1400px]'>
                <p>time is :  {time}</p>
                <Link href='/demo' preserveScroll className='text-blue-500' >go to demo</Link>
            </div>
        </>
    );
};

export default Demo;
