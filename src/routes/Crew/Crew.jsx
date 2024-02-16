import Header from "../../components/Header/Header";
import Background from "../../assets/crew/background-crew-desktop.jpg";
import Page from "../../components/Page/Page";
import ContentMargin from "../../components/ContentMargin/ContentMargin";

import { Container, Content, HomeTitle } from "./Crew.styled";

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
          <Content>
            <h1 className="title">
              <span>02</span> Meet Your Crew
            </h1>
            <div className="content-container">
              <div>
                <h2>Commander</h2>
                <h1>Douglas Hurley</h1>
                <p>
                  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time
                  as commander of Crew Dragon Demo-2.
                </p>
              </div>
              <div className="container-right">
                <img src={crew[0].images.png} />
              </div>
            </div>
          </Content>
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Crew;
