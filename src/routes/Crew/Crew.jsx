import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import Background from "../../assets/crew/background-crew-desktop.jpg";
import Page from "../../components/Page/Page";
import ContentMargin from "../../components/ContentMargin/ContentMargin";
import CrewContent from "./CrewContent";
import { Container } from "./Crew.styled";

const Crew = ({ crew }) => {
  return (
    <Page background={Background}>
      <Container>
        <Header />
        <ContentMargin
          marginLeft="11%"
          marginRight="11%"
          className="content-margin"
        >
          <CrewContent props={crew} />
        </ContentMargin>
      </Container>
    </Page>
  );
};

Crew.propTypes = {
  crew: PropTypes.array
};

export default Crew;
