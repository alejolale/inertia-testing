import React, {useState} from 'react';
import {Head, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

const CreateUser = () => {
    const {props} = usePage()

    const [form, setForm]= useState({name:'', email: '', password: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        Inertia.post('/users', form)
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
                            value={form.name}
                            onChange={event => setForm((prevState) => ({...prevState, name: event.target.value}))}
                            className='border border-gray-300 p-2 w-full'
                            name='name'
                            id='name'
                            required
                            type="text"/>
                        {props.errors.name && <div className='text-xs text-red-500'>{props.errors.name}</div>}
                    </div>

                    <div className='mt-6'>
                        <label htmlFor="email" className='block mb-2 uppercase font-bold text-xs text-gray-700'>
                            Email
                        </label>

                        <input
                            value={form.email}
                            onChange={event => setForm((prevState) => ({...prevState, email: event.target.value}))}
                            className='border border-gray-300 p-2 w-full'
                            name='email'
                            id='email'
                            required
                            type="email"/>
                        {props.errors.email && <div className='text-xs text-red-500'>{props.errors.email}</div>}

                    </div>

                    <div className='mt-6'>
                        <label htmlFor="password" className='block mb-2 uppercase font-bold text-xs text-gray-700'>
                            Password
                        </label>

                        <input
                            value={form.password}
                            onChange={event => setForm((prevState) => ({...prevState, password: event.target.value}))}
                            className='border border-gray-300 p-2 w-full'
                            name='password'
                            id='password'
                            required
                            type="password"/>
                        {props.errors.password && <div className='text-xs text-red-500'>{props.errors.password}</div>}

                    </div>

                    <div className="mt-6">
                        <button onClick={handleSubmit} type='submit' className='bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500'>
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default CreateUser;
