import PropTypes from "prop-types";
import { useState } from "react";
import ContentMargin from "../../components/ContentMargin/ContentMargin";
import { HomeTitle, Content, ContainerLeft, ContainerRight } from "./Crew.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CrewContent = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = props[activeIndex];

  const { role, bio, images, name } = activeCrew;

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ContentMargin className="content-margin">
      <HomeTitle>
        <div className="title">
          <span>02</span> Meet Your Crew
        </div>
      </HomeTitle>

      {/* {map((item, index) => ( */}
      <Content
        className="content-container"
        // key={index}
      >
        <ContainerLeft className="container-left">
          <div className="container-left-content">
            <h2>{role}</h2>
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>

          <div className="nav-container">
            {props.map((item, index) => (
              <div
                className={`sphere ${activeIndex === index ? "active" : ""}`}
                key={index}
                defaultValue={index}
                onClick={() => handleNavItemClick(index)}
              ></div>
            ))}
          </div>
        </ContainerLeft>

        <ContainerRight className="container-right">
          <img
            src={images.png}
            alt={name}
          />
        </ContainerRight>
      </Content>
    </ContentMargin>
  );
};

CrewContent.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string,
      name: PropTypes.string,
      bio: PropTypes.string,
      images: PropTypes.shape({
        png: PropTypes.string
      })
    })
  )
};

export default CrewContent;
