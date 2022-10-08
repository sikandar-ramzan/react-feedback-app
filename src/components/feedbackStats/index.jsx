import React, { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let avgRating =
    feedback.reduce((acc, cur) => {
      acc += cur.rating;
      return acc;
    }, 0) / feedback.length;

  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedback.length}</h4>
      <h4>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
}

export default FeedbackStats;
