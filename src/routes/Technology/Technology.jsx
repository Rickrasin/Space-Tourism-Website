import PropTypes from "prop-types";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

import BgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import BgTablet from "../../assets/technology/background-technology-tablet.jpg";
import BgMobile from "../../assets/technology/background-technology-mobile.jpg";

import Launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";

import { Container, HomeTitle, Content } from "./techonology.styled";

const Technology = ({ technology }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTechnology = technology[activeIndex];

  const { name, description, images } = activeTechnology;
  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  const GetImage = () => {
    switch (activeIndex) {
      case 0:
        return Launch;
      case 1:
        return SpacePort;
      case 2:
        return SpaceCapsule;
      default:
        return Launch;
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
        <ContentMargin
          marginLeft="11%"
          marginRight="11%"
          className="content-margin"
        >
          <Content>
            <HomeTitle className="title">
              <div className="title">
                <span>03</span> SPACE LAUNCH 101
              </div>
            </HomeTitle>

            <div className="container">
              <nav className="nav-container">
                {technology.map((technology, index) => (
                  <div
                    className="point"
                    key={index}
                    onClick={() => handleNavItemClick(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </nav>
              <div className="content-container">
                <div className="content-container-left">
                  <h2>THE TERMINOLOGY…</h2>
                  <h1>{name}</h1>
                  <p>{description}</p>
                </div>
                <div className="content-container-right">
                  <img
                    className="Planet"
                    src={GetImage()}
                  />
                </div>
              </div>
            </div>
          </Content>
        </ContentMargin>
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
