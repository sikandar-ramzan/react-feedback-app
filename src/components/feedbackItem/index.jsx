import React from "react";
import Card from "../shared/card";
import { ReactComponent as CloseIcon } from "../../assests/icons/close.svg";
import { ReactComponent as EditIcon } from "../../assests/icons/edit-item.svg";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { editFeedbackItem, deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>

      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <CloseIcon />
      </button>
      <button className="edit" onClick={() => editFeedbackItem(feedback)}>
        <EditIcon />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
