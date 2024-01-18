import { useState } from "react";
import { Container, NavGrid, Nav } from "./DestinationSlider.styled";
import SlidedContent from "./SlidedContent";

const DestinationSlider = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <NavGrid className="nav-grid">
        <div></div>
        <Nav>
          {destinations.map((destination, index) => (
            <p
              key={destination.name}
              className={`navbar-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleNavItemClick(index)}
            >
              {destination.name}
            </p>
          ))}
        </Nav>
      </NavGrid>
      <SlidedContent destination={activeDestination} />
    </Container>
  );
};

export default DestinationSlider;
