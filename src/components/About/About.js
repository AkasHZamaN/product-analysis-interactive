import React from 'react';

const About = () => {
    return (
        <section className='w-4/5 mx-auto bg-orange-50 my-16 py-5 px-5 rounded-2xl'>
            <article className='text-center font-semibold text-2xl text-slate-500 font-mono my-10'>
                <h1>Welcome to visit our website!!</h1>
            </article>    
            <article className='flex justify-between mx-20 my-10'>
                <article>
                    <h1 className='text-2xl font-mono font-semibold text-slate-500 my-5'>Our Services</h1>
                    <p className='font-semibold text-gray-500 text-xl'><small>Create Your Landing Page</small></p>
                    <p className='font-semibold text-gray-500 text-xl'><small>Create Your Blogs</small></p>
                    <p className='font-semibold text-gray-500 text-xl'><small>Create Your Recharts</small></p>
                    <p className='font-semibold text-gray-500 text-xl'><small>Create Dynamic Card Components</small></p>
                    
                </article>
                <article>
                    <h1 className='text-2xl font-mono font-semibold text-slate-500 my-5'>Contact Us</h1>
                    <address className='text-gray-500 font-semibold'>
                        Shibgonj,Sylhet-3100 <br />
                        Tamabil road, Sylhet. <br />
                        Email: abc@gmail.com   <br />
                        Mobile: +8801725xxxx
                    </address>
                </article>
            </article>
        </section>
    );
};

export default About;