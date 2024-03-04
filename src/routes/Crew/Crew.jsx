import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";
import CrewContent from "./CrewContent";
import { Container } from "./Crew.styled";

import BgMobile from "../../assets/crew/background-crew-mobile.jpg";
import BgTablet from "../../assets/crew/background-crew-tablet.jpg";
import BgDesktop from "../../assets/crew/background-crew-desktop.jpg";

const Crew = ({ crew }) => {
  return (
    <Page
      desktopBackground={BgDesktop}
      tabletBackground={BgTablet}
      mobileBackground={BgMobile}
    >
      <Container>
        <Header />
        <CrewContent props={crew} />
      </Container>
    </Page>
  );
};

Crew.propTypes = {
  crew: PropTypes.array
};

export default Crew;
