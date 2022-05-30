import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./AddReview.css";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const handleReview = (event) => {
    event.preventDefault();

    const review = {
      name: user.displayName,
      email: user.email,
      rating: event.target.rating.value,
      img: event.target.picture.value,
      note: event.target.review.value,
    };

    console.log(review);

    fetch("https://aqueous-savannah-68941.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your Review is successfully added.");
          event.target.reset();
        }
      });
  };

  return (
    <section className="review-section">
      <h3 className="review-title text-center text-primary">Please Add a Review</h3>
      <hr />
      <div className="add-review-container">
        <div className="review-form">
          <form onSubmit={handleReview}>
            <label htmlFor="name">Your Name</label>
            <input
              className="review-input-field"
              type="text"
              name="name"
              id=""
              value={user.displayName}
              disabled
              readOnly
              required
            />

            <label htmlFor="rating">Rating must be 1 into 5</label>
            <input
              className="review-input-field"
              type="number"
              name="rating"
              id=""
              placeholder="Rating"
            />

            <label htmlFor="picture">Your Picture URL</label>
            <input
              className="review-input-field"
              type="text"
              name="picture"
              id=""
              placeholder="Picture URL"
            />

            <label htmlFor="address">Type your review</label>
            <textarea
              className="address-input-field"
              name="review"
              id=""
              cols="30"
              rows="2"
              placeholder="Type your review"
              required
            ></textarea>

            <input
              className="btn btn-secondary text-white font-bold confirm-btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
