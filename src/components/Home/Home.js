import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the homepage!</h2>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Home;
