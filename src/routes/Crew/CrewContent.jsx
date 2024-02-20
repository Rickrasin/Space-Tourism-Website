import PropTypes from "prop-types";
import { Content, HomeTitle } from "./Crew.styled";

const CrewContent = ({ props }) => {
  return (
    <Content>
      <div className="title">
        <HomeTitle>
          <span>02</span> Meet Your Crew
        </HomeTitle>
      </div>
      <div className="content-container">
        <div className="container-left">
          <div className="container-left-content">
            <h2>{props[0].role}</h2>
            <h1>{props[0].name}</h1>
            <p>{props[0].bio}</p>
          </div>

          <nav className="nav">
            <div className="nav-item">
              <a className="point"></a>
            </div>
            <div className="nav-item">
              <div className="point"></div>
            </div>
            <div className="nav-item">
              <div className="point"></div>
            </div>
            <div className="nav-item">
              <div className="point"></div>
            </div>
          </nav>
        </div>
        <div className="container-right">
          <img src={props[0].images.png} />
        </div>
      </div>
    </Content>
  );
};

CrewContent.propTypes = {
  props: PropTypes.array,
  role: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  png: PropTypes.string
};

export default CrewContent;
