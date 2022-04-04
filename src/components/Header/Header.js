import React from "react";
import { Link } from "react-router-dom";
import logo from './logo/Online_logo_2.png';

const Header = () => {
  return (
    <section>
      <article className=" flex justify-between items-center text-center text-4xl font-mono font-semibold bg-slate-500 text-white py-8 px-16">
        <img className="w-40 h-16 mr-2 bg-orange-50 rounded-2xl" src={logo} alt="" />
        <h1>Products Reviewer's</h1>
      </article>
      <nav className="text-center bg-teal-500  text-white py-3 font-semibold">
        <Link className="mr-16 hover:text-teal-800" to="/">
          HOME
        </Link>
        <Link className="mr-16 hover:text-teal-800" to="/reviews">
          REVIEWS
        </Link>
        <Link className="mr-16 hover:text-teal-800" to="/dashboard">
          DASHBOARD
        </Link>
        <Link className="mr-16 hover:text-teal-800" to="/blogs">
          BLOGS
        </Link>
        <Link className="mr-16 hover:text-teal-800" to="/about">
          ABOUT
        </Link>
      </nav>
    </section>
  );
};

export default Header;
