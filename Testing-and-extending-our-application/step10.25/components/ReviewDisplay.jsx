import React from "react";

const ReviewDisplay = ({ review, onNext }) => {
  if (!review) return null;

  return (
    <div>
      <h2>Review Created!</h2>
      <p>ID: {review.id}</p>
      <p>Rating: {review.rating}</p>
      <p>Text: {review.text}</p>

      <button onClick={onNext}>View Repositories</button>
    </div>
  );
};

export default ReviewDisplay;
