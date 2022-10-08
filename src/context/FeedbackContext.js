import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: `Feedback App created with ReactJS for UI, ContextAPI for state management, 
      Framer motion for animations and React-Router-DOM for routing.`,
      rating: 9,
    },
  ]);

  const deleteFeedback = (id) => {
    setFeedback(() => feedback.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const initUpdateItem = {
    item: {},
    isEditModeOn: false,
  };
  const [editItem, setEditItem] = useState(initUpdateItem);

  const editFeedbackItem = (item) => {
    setEditItem({
      item,
      isEditModeOn: true,
    });
  };

  const updateItem = (id, newItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    );
    setEditItem(initUpdateItem);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        addFeedback,
        deleteFeedback,
        editItem,
        editFeedbackItem,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
