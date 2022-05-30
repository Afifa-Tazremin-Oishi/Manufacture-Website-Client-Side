import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://infinite-lake-36259.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  // reviews reverse to get latest collection of tools
  const latestReviews = [...reviews].reverse();

  return (
    <div className="my-28 pt-24">
      <div className="text-center">
        <h1 className="text-secondary text-3xl font-bold uppercase">Testimonials</h1>
        <h1 className="text-4xl font-bold mb-5">What Our Customers Say</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {latestReviews.slice(0, 3).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
