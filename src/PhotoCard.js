import React from "react";
import "./PhotoCard.css";
function PhotoCard(props) {
  return (
    <img src={props.url} className="photo-card" alt="Photo"/>
  );
}

export default PhotoCard;
