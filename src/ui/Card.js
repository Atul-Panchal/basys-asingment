import React from "react";
import "./Card.css";
const Card = (props) => {
  const { width, height } = props;
  return (
    <div
      className="card-wrapper"
      style={{ width: `${width}`, height: `${height}` }}
    >
      {props.children}
    </div>
  );
};

export default Card;
