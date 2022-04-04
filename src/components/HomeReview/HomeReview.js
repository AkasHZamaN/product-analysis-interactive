import React from 'react';
import { StarIcon } from "@heroicons/react/solid";
const HomeReview = (props) => {
    const {name, thumbnail, ratings, review} = props.homeReview;
    return (
        <section>
            <article className="border-2 h-72 rounded-2xl p-4"> 
      <article className="flex items-center font-semibold text-slate-500">
        <img className="w-16 h-16 rounded-full mr-5" src={thumbnail} alt="" />
        <h1>{name}</h1>
      </article>
      <article>
        <p className="text-center">
          <span className="text-4xl font-mono font-semibold">{ratings}</span>
          <span className=" text-gray-500 font-semibold">/5</span>
        </p>
        <p className="flex justify-center mb-5">
            <StarIcon className="w-6 h-6 text-amber-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-amber-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-amber-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-amber-400"></StarIcon>
            <StarIcon className="w-6 h-6 text-amber-400"></StarIcon>
        </p>
        <p className="text-gray-500">
          <small>{review}</small>
        </p>
      </article>
      </article>
        </section>
    );
};

export default HomeReview;