import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About the React Feedback </h1>
        <p>
          This is an react app built to provide valuable feedback about a
          product or service
        </p>

        <p>version: 1.0.0</p>
        <p> &copy; Sikandar Ramzan</p>

        <p>
          <Link to={"/"}>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
