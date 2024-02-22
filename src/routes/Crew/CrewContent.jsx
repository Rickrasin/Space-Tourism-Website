import PropTypes from "prop-types";
import { Content, HomeTitle, ContentContainer, ContainerLeft, ContainerRight } from "./Crew.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CrewContent = ({ props }) => {
  console.log(props);

  return (
    <Content>
      <div className="title">
        <HomeTitle>
          <span>02</span> Meet Your Crew
        </HomeTitle>
      </div>

      {/* {props.map((item, index) => ( */}
      <ContentContainer
        className="content-container"
        // key={index}
      >
        <ContainerLeft className="container-left">
          <div className="container-left-content">
            <h2>{props[0].role}</h2>
            <h1>{props[0].name}</h1>
            <p>{props[0].bio}</p>
          </div>
        </ContainerLeft>

        <ContainerRight className="container-right">
          <img
            src={props[0].images.png}
            alt={props[0].name}
          />
        </ContainerRight>
      </ContentContainer>
      {/* ))} */}
    </Content>
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
