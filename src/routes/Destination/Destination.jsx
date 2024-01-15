import { Container, HomeTitle } from "./Destination.styled";
import Header from "../../components/Header/Header";
import DestinationSlider from "../../components/Destination/DestinationSlider";
import Page from "../../components/Page/Page";
import backgroundImage from "../../assets/destination/background-destination-desktop.jpg";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

const Destination = () => {
  return (
    <Page background={backgroundImage}>
      <Container>
        <Header />
        <ContentMargin marginRight="10.25rem" marginLeft="10.25rem">
          <HomeTitle>
            <h2>
              <span>01 </span> Pick your Destination
            </h2>
          </HomeTitle>
          <DestinationSlider />
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Destination;
