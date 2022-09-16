import React from "react";

function Card({ children, dark = false }) {
  return <div className={`card ${dark && "reverse"}`}>{children}</div>;
}

export default Card;
