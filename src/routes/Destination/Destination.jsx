// Destination.jsx
import { Container } from "./Destination.styled";
import PropTypes from "prop-types";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import BgTablet from "../../assets/destination/background-destination-tablet.jpg";
import BgMobile from "../../assets/destination/background-destination-mobile.jpg";

import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import ContentMargin from "../../components/ContentMargin/ContentMargin";
import SlidedContent from "./DestinationSlider/SlidedContent";

const Destination = ({ destinations }) => {
  return (
    <Page
      desktopBackground={BgDesktop}
      tabletBackground={BgTablet}
      mobileBackground={BgMobile}
    >
      <Container>
        <Header />
        <ContentMargin className="content-margin">
          <SlidedContent destinations={destinations} />
        </ContentMargin>
      </Container>
    </Page>
  );
};

Destination.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.string)
};

export default Destination;
