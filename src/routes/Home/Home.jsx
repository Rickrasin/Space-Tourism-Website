import Header from "../../components/Header/Header";
import HomeContent from "./Content/HomeContent";
import Page from "../../components/Page/Page";
import Background from "../../assets/home/background-home-desktop.jpg";

import { Container } from "./Home.style";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

const Home = () => {
  return (
    <Page
      background={Background}
      marginLeft="20px"
      marginRight="20px"
    >
      <Container className="h-container">
        <Header />
        <ContentMargin
          marginRight="10.41rem"
          marginLeft="10.41rem"
          className="content-margin"
        >
          <HomeContent />
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Home;
