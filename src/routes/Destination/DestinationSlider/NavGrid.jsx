import { useState } from "react";
import PropTypes from "prop-types";
import { NavGrid, Nav } from "./DestinationSlider.styled";
import SlidedContent from "./SlidedContent";

const DestinationSlider = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <NavGrid>
      <div className="nav-grid">
        <div></div>
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
      </div>
      <SlidedContent destination={activeDestination} />
    </NavGrid>
  );
};

DestinationSlider.propTypes = {
  destinations: PropTypes.array
};

export default DestinationSlider;
