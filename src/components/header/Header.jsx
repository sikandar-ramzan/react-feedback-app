import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header({ text }) {
  return (
    <header className="app-header">
      <div className="container">
        <Link to={"/"} className="header-icon-text">
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Header Text",
};

export default Header;
