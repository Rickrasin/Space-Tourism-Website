import Header from "../../components/Header/Header";
import HomeContent from "./Content/HomeContent";
import Page from "../../components/Page/Page";
import BgDesktop from "../../assets/home/background-home-desktop.jpg";
import BgTablet from "../../assets/home/background-home-tablet.jpg";
import BgMobile from "../../assets/home/background-home-mobile.jpg";

import { Container } from "./Home.style";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

const Home = () => {
  return (
    <Page
      desktopBackground={BgDesktop}
      tabletBackground={BgTablet}
      mobileBackground={BgMobile}
    >
      <Container className="h-container">
        <Header />
        <ContentMargin className="content-margin">
          <HomeContent />
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Home;
