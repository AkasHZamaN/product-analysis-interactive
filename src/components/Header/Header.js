import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <div className='text-center text-4xl font-mono font-semibold bg-slate-500 text-white py-8'>
            <h1>Online Products Reviewer's</h1>
        </div>
        <nav className='text-center bg-teal-500  text-white py-3 font-semibold'>
            <Link className='mr-16 hover:text-teal-800' to="/">HOME</Link>
            <Link className='mr-16 hover:text-teal-800' to="/reviews">REVIEWS</Link>
            <Link className='mr-16 hover:text-teal-800' to="/dashboard">DASHBOARD</Link>
            <Link className='mr-16 hover:text-teal-800' to="/blogs">BLOGS</Link>
            <Link className='mr-16 hover:text-teal-800' to="/about">ABOUT</Link>
        </nav>
        </section>
        
        
    );
};

export default Header;