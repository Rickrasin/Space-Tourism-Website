// SlidedContent.jsx
import React from "react";
import { Content } from "./DestinationSlider.styled";

const SlidedContent = ({ destination }) => {
  const { name, images, description, distance, travel } = destination;

  return (
    <Content>
      <div className="img">
        <img
          className="Planet"
          src={images.png}
          alt={name}
        />
      </div>
      <div className="planets-content">
        <div className="planets-content-container">
          <div className="top">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className="bottom">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>{distance}</p>{" "}
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>{travel}</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default SlidedContent;
