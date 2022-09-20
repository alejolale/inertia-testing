import React from 'react';
import {Head, Link} from "@inertiajs/inertia-react";
import clsx from "clsx";

const Demo = ({time, users}) => {
    return (
        <>
            <Head>
                <title>Demo</title>
                {/* if we overrides it on other component like header we must use headKey to prevent multiple metas */}
                <meta type='description' content='Home information' headKey='description'/>
            </Head>
            <p>Hey demo</p>

            {/*we create a table with pagination*/}
            {/*{users.map(user => <p>{user.name}</p>)}*/}

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">

                                <tbody>
                                    {users.data.map((user, i) => <tr className={clsx("border-b", i % 2 === 1 ? 'bg-gray-100' : 'bg-white')}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                {users.links.map(link => {

                    const label = link.label.replace('&laquo;','').replace('&raquo;', '')
                    const style = 'px-2'
                    return link.url === null ? <span className={clsx(style, 'text-gray-500', link.active && "text-red-500")}>{label}</span> :  <Link className={clsx(style, link.active && "text-red-500")} href={link.url}>{label}</Link>
                })}
            </div>

            <div className='mt-[1400px]'>
                <p>time is :  {time}</p>
                <Link href='/demo' preserveScroll className='text-blue-500' >go to demo</Link>
            </div>
        </>
    );
};

export default Demo;
