import React from "react";
import Card from "../shared/card";
import { ReactComponent as CloseIcon } from "../../assests/icons/close.svg";

function FeedbackItem({ feedback, handleDelete }) {
  // const handleDelete = (id) => console.log(id);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => handleDelete(feedback.id)}>
        <CloseIcon />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
