import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";
import ContentMargin from "../../components/ContentMargin/ContentMargin";
import Background from "../../assets/technology/background-technology-desktop.jpg";

import { Container, HomeTitle, Content } from "./techonology.styled";

const Technology = ({ technology }) => {
  const { name, description, images } = technology[0];

  console.log(name, description, images);
  console.log(technology);

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
            <HomeTitle className="title">
              <div className="title">
                <span>03</span> SPACE LAUNCH 101
              </div>
            </HomeTitle>

            <div className="container">
              <nav>
                <div
                  className="point"
                  key={0}
                >
                  1
                </div>
                <div
                  className="point"
                  key={1}
                >
                  2
                </div>
                <div
                  className="point"
                  key={2}
                >
                  3
                </div>
              </nav>
              <div className="content-container">
                <div className="content-container-left">
                  <h2>THE TERMINOLOGY…</h2>
                  <h1>{name}</h1>
                  <p>{description}</p>
                </div>
                <div className="content-container-right">
                  <img
                    className="Planet"
                    src={images.portrait}
                  />
                </div>
              </div>
            </div>
          </Content>
        </ContentMargin>
      </Container>
    </Page>
  );
};

export default Technology;
