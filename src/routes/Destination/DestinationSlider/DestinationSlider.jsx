import React, { useState } from "react";
import { Container, NavGrid, Nav } from "./DestinationSlider.styled";
import SlidedContent from "./SlideContent";

const DestinationSlider = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  const activeDestination = destinations[activeIndex];

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
      <SlidedContent
        Title={activeDestination.name}
        ImgSrc={activeDestination.images.png}
        description={activeDestination.description}
        AVGDistance={activeDestination.distance}
        ESTTravel={activeDestination.travel}
      />
    </Container>
  );
};

export default DestinationSlider;
