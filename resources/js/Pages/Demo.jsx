import React from 'react';
import Nav from "../Components/Nav";
import {Link} from "@inertiajs/inertia-react";

const Demo = ({time}) => {
    return (
        <div>
            <Nav/>
            <p>Hey demo</p>
            <div className='mt-[1400px]'>
                <p>time is :  {time}</p>
                <Link href='/demo' preserveScroll className='text-blue-500' >go to demo</Link>
            </div>
        </div>
    );
};

export default Demo;
