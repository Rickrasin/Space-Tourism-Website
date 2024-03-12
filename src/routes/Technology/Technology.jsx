import PropTypes from "prop-types";
import { useRef, useLayoutEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

import BgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import BgTablet from "../../assets/technology/background-technology-tablet.jpg";
import BgMobile from "../../assets/technology/background-technology-mobile.jpg";

import Launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import LaunchLandScape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpacePort from "../../assets/technology/image-spaceport-portrait.jpg";
import SpacePortLandScape from "../../assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandScape from "../../assets/technology/image-space-capsule-landscape.jpg";
import useWindowDimensions from "../../components/hooks/useWindowDimensions";

import { Container, HomeTitle, Content } from "./techonology.styled";

const Technology = ({ technology }) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTechnology = technology[activeIndex];

  const { name, description, images } = activeTechnology;
  const handleNavItemClick = index => {
    setActiveIndex(index);
  };

  const GetImage = () => {
    switch (activeIndex) {
      case 0:
        return width < 768 ? LaunchLandScape : Launch;
      case 1:
        return width < 768 ? SpacePortLandScape : SpacePort;
      case 2:
        return width < 768 ? SpaceCapsuleLandScape : SpaceCapsule;
      default:
        return width < 768 ? LaunchLandScape : Launch;
    }
  };

  console.log(name, description, images);
  console.log(technology);

  return (
    <Page
      desktopBackground={BgDesktop}
      tabletBackground={BgTablet}
      mobileBackground={BgMobile}
    >
      <Container>
        <Header />
        <HomeTitle className="title">
          <div className="title">
            <span>03</span> SPACE LAUNCH 101
          </div>
        </HomeTitle>

        <Content>
          {width < 768 && <img className="Planet" src={GetImage()} />}
          <ContentMargin>
            <div className="container">
              {width > 768 &&
                <div className="content-container-left">
                  <img className="Planet" src={GetImage()} />
                </div>}
              <nav className="nav-container">
                {technology.map((technology, index) =>
                  <div
                    className="point"
                    key={index}
                    onClick={() => handleNavItemClick(index)}
                  >
                    {index + 1}
                  </div>
                )}
              </nav>

              <div className="content-container-right">
                <h2>THE TERMINOLOGY…</h2>
                <h1>
                  {name}
                </h1>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </ContentMargin>
        </Content>
      </Container>
    </Page>
  );
};

Technology.propTypes = {
  technology: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.shape({
        portrait: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

export default Technology;
