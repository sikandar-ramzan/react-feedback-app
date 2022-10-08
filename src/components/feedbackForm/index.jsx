import React, { useState, useContext, useEffect } from "react";
import Card from "../shared/card";
import Button from "../shared/button";
import RatingSelector from "../ratingSelector";
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackForm() {
  const [feedbackText, setFeedbackText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, editItem, updateItem } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (e.target.value !== "" && e.target.value.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("must contain atleast 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setFeedbackText(e.target.value);
  };

  useEffect(() => {
    if (editItem.isEditModeOn === true) {
      setFeedbackText(editItem.item.text);
      setBtnDisabled(false);
      setRating(editItem.item.rating);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedbackText.trim().length > 10) {
      const newFeedback = {
        text: feedbackText,
        rating,
      };

      if (editItem.isEditModeOn === true) {
        updateItem(editItem.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setFeedbackText("");
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please leave a feedback...</h2>
        <RatingSelector select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={feedbackText}
            placeholder="enter your feedback here"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
