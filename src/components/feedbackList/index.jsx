import React from "react";
import FeedbackItem from "../feedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackList() {
  const { feedback, deleteFeedback, editFeedbackItem } =
    useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <em>no feedback data</em>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <FeedbackItem
              feedback={item}
              deleteFeedback={deleteFeedback}
              editFeedbackItem={editFeedbackItem}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
