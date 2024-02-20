// Destination.jsx
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
          <DestinationSlider destinations={destinations} />
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Destination;
