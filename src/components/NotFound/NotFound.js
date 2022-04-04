import React from 'react';
import { ExclamationIcon } from "@heroicons/react/solid";
const NotFound = () => {
    return (
        <section className='w-1/2 mx-auto bg-orange-50 py-5 px-5 font-mono my-40 rounded-2xl'>
            <h1 className='text-3xl text-center text-slate-600 my-10'> Opps!! This file is not avaiable right now.</h1>
            <article className='flex justify-center items-center'>
            <small><ExclamationIcon className='w-10 h-10 mr-2 text-red-500'></ExclamationIcon></small>
            <small className='text-4xl text-center font-semibold my-5 font-mono'> 404</small>
            </article>
        </section>
    );
};

export default NotFound;