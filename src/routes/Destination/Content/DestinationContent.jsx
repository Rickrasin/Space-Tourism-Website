// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { Container, SwiperContainer } from "./DestinationContent.styled";

import data from "../../../data.json";

const DestinationContent = () => {
  const planetMap = data.destinations;
  const planetName = planetMap.map((destinations) => destinations.name);

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + planetName[index] + "</span>";
    },
  };

  return (
    <Container>
      <h2 className="container-title">
        <span>01</span> PICK YOUR DESTINATION
      </h2>

      <SwiperContainer
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-pagination-container">
          <div></div>
          <div className="swiper-pagination"></div>
        </div>

        {planetMap.map((planet, index) => (
          <SwiperSlide key={index}>
            <img
              src={planet.images["png"]}
              alt={planetName}
              className="left-container"
            />
            <div className="right-container">
              <div className="desc-container">
                <h1 className="title">{planet.name}</h1>
                <p className="description">{planet.description}</p>
              </div>
              <div className="bottom-container">
                <div className="bottom-container-item">
                  <h3 className="bottom-container-item-title">AVG. Distance</h3>
                  <p className="bottom-container-item-text">
                    {planet.distance}
                  </p>
                </div>
                <div className="bottom-container-item">
                  <h3 className="bottom-container-item-title">
                    EST. Travel Time
                  </h3>
                  <p className="bottom-container-item-text">{planet.travel}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  );
};

export default DestinationContent;
