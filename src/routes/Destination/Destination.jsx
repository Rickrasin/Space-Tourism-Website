import { Container, HomeTitle } from "./Destination.styled";
import Header from "../../components/Header/Header";
import DestinationSlider from "./DestinationSlider/DestinationSlider";
import Page from "../../components/Page/Page";
import backgroundImage from "../../assets/destination/background-destination-desktop.jpg";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

const Destination = ({ destinations }) => {
  return (
    <Page background={backgroundImage}>
      <Container>
        <Header />
        <ContentMargin marginLeft="11%" marginRight="11%">
          <HomeTitle>
            <h2>
              <span>01 </span> Pick your Destination
            </h2>
          </HomeTitle>
          <DestinationSlider destinations={destinations} />
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Destination;
