import React from "react";

function FeedbackStats({ feedbacks }) {
  let avgRating =
    feedbacks.reduce((acc, cur) => {
      acc += cur.rating;
      return acc;
    }, 0) / feedbacks.length;

  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedbacks.length}</h4>
      <h4>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
}

export default FeedbackStats;
