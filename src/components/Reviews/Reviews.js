import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewUser from "../ReviewUser/ReviewUser";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section >
      <article className="text-right mr-12">
        <h2 className="text-2xl font-semibold font-mono text-slate-500 my-5">Top Ten Reviewer's in Sylhet</h2>
      </article>
      <article className="grid grid-cols-3 gap-4 justify-items-center mx-10 mb-10">
          {
              reviews.map(item => <ReviewUser key={item.id} item={item}></ReviewUser>)
          }
      </article>
    </section>
  );
};

export default Reviews;
