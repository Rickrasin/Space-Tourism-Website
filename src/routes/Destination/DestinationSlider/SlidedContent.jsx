// SlidedContent.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Content, NavContainer, Nav } from "./DestinationSlider.styled";
import { HomeTitle } from "../Destination.styled";

const SlidedContent = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  const { name, images, description, distance, travel } = activeDestination;
  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Content>
      <div className="left-container">
        <div className="title">
          <HomeTitle>
            <span>01 </span>
            <h2>Pick your Destination</h2>
          </HomeTitle>
        </div>
        <div className="img">
          <img
            className="Planet"
            src={images.png}
            alt={name}
          />
        </div>
      </div>
      <div className="planets-content">
        <NavContainer>
          <Nav>
            {destinations.map((destination, index) => (
              <p
                key={destination.name}
                className={`navbar-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleNavItemClick(index)}
              >
                <div className="navbar-item-content">{destination.name}</div>
              </p>
            ))}
          </Nav>
        </NavContainer>
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

SlidedContent.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.any)
};

export default SlidedContent;
