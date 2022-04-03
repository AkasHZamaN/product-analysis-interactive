import React from "react";
import laptop from "./img/laptop.png"
const Home = () => {
  return (
    <section>
      <article className="flex justify-between items-center mx-16 mt-24">
        <article>
          <h1 className="text-3xl text-teal-500 font-mono">
            Dell XPS 17 HANDS-ON Preview! <span className="text-slate-500">Amazing Future Generation</span>
          </h1>
          <p className=" text-gray-500 font-semibold mt-10">
            XPS with Premium Support helps you stay connected and productive
            with fast, dedicated expert help whenever you need it. Get one year
            of Premium Support included when you purchase an XPS laptop.
          </p>
          <button className="border-0 py-2 px-6 mt-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl">Buy Now</button>
        </article>
        <article>
            <img src={laptop} alt="" />
        </article>
      </article>
      <article>
          <h1 className="text-center text-3xl font-mono mt-28 text-slate-500 font-semibold">Customer Reviews</h1>
      </article>
    </section>
  );
};

export default Home;
