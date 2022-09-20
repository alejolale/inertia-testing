import React from 'react';
import {Head, useForm} from "@inertiajs/inertia-react";

const CreateUser = () => {

    const {data, setData, post, processing, errors} = useForm({name:'', email: '', password: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/users')
    }

    return (
        <>
            <Head>
                <title>Create user</title>
            </Head>
            <div>
                <h1>Create new user</h1>

                <form className='mt-8 max-w-md mx-auto'>
                    <div>
                        <label htmlFor="name" className='block mb-2 uppercase font-bold text-xs text-gray-700'>
                            Name
                        </label>

                        <input
                            value={data.name}
                            onChange={event => setData('name', event.target.value)}
                            className='border border-gray-300 p-2 w-full'
                            name='name'
                            id='name'
                            required
                            type="text"/>
                        {errors.name && <div className='text-xs text-red-500'>{errors.name}</div>}
                    </div>

                    <div className='mt-6'>
                        <label htmlFor="email" className='block mb-2 uppercase font-bold text-xs text-gray-700'>
                            Email
                        </label>

                        <input
                            value={data.email}
                            onChange={event => setData('email', event.target.value)}
                            className='border border-gray-300 p-2 w-full'
                            name='email'
                            id='email'
                            required
                            type="email"/>
                        {errors.email && <div className='text-xs text-red-500'>{errors.email}</div>}

                    </div>

                    <div className='mt-6'>
                        <label htmlFor="password" className='block mb-2 uppercase font-bold text-xs text-gray-700'>
                            Password
                        </label>

                        <input
                            value={data.password}
                            onChange={event => setData('password', event.target.value)}
                            className='border border-gray-300 p-2 w-full'
                            name='password'
                            id='password'
                            required
                            type="password"/>
                        {errors.password && <div className='text-xs text-red-500'>{errors.password}</div>}

                    </div>

                    <div className="mt-6">
                        <button onClick={handleSubmit} disabled={processing} type='submit' className='flex bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500'>
                            {processing && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>}
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default CreateUser;
