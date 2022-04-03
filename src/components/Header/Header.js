import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <div className='text-center text-4xl font-serif font-semibold bg-slate-500 text-white py-3'>
            <h1>Products Reviewers</h1>
        </div>
        <nav className='text-center bg-teal-500 text-white py-3 font-semibold'>
            <Link className='mr-5' to="/">HOME</Link>
            <Link className='mr-5' to="/reviews">REVIEWS</Link>
            <Link className='mr-5' to="/dashboard">DASHBOARD</Link>
            <Link className='mr-5' to="/blogs">BLOGS</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
        </section>
        
        
    );
};

export default Header;