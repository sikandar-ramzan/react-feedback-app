import React from "react";
import Header from "./components/header/Header";
import FeedbackList from "./components/feedbackList";
import { feedbackData } from "./data/feedbackData";
import { useState } from "react";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import AboutPage from "./routes/about";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/aboutIconLink";

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  const deleteFeedback = (id) => {
    setFeedbacks(() => feedbacks.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <Router>
      <Header text={"React Feedback"} />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedback={feedbacks}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
