import React from "react";
import { ReactComponent as AboutIcon } from "../../assests/icons/about-icon.svg";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to={"/about"}>
        <AboutIcon />
      </Link>
    </div>
  );
}

export default AboutIconLink;
