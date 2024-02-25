// Destination.jsx
import { Container, HomeTitle } from "./Destination.styled";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import NavGrid from "./DestinationSlider/NavGrid";
import Page from "../../components/Page/Page";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import BgTablet from "../../assets/destination/background-destination-tablet.jpg";
import BgMobile from "../../assets/destination/background-destination-mobile.jpg";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

const Destination = ({ destinations }) => {
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
          <div className="title">
            <HomeTitle>
              <span>01 </span>
              <h2>Pick your Destination</h2>
            </HomeTitle>
          </div>
          <NavGrid destinations={destinations} />
        </ContentMargin>
      </Container>
    </Page>
  );
};

Destination.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.string)
};

export default Destination;
