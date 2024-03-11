// SlidedContent.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { Content, NavContainer, Nav } from "./DestinationSlider.styled";
import { HomeTitle } from "../Destination.styled";
import Moon from "../../../assets/destination/image-moon.png";
import Mars from "../../../assets/destination/image-mars.png";
import Europa from "../../../assets/destination/image-europa.png";

const SlidedContent = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];
  console.log(destinations);

  const { name, description, distance, travel } = activeDestination;
  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  const GetImage = () => {
    switch (activeIndex) {
      case 0:
        return Moon;
      case 1:
        return Mars;

      case 2:
        return Europa;

      default:
        return Moon;
    }
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
            src={GetImage()}
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
