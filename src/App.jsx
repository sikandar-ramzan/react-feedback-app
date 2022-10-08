import React from "react";
import Header from "./components/header/Header";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import AboutPage from "./routes/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/aboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <Router>
      {" "}
      <FeedbackProvider>
        <Header text={"React Feedback"} />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </FeedbackProvider>
    </Router>
  );
}

export default App;
