import { Content } from "./DestinationSlider.styled";

const SlideContent = ({
  Title,
  ImgSrc,
  description,
  AVGDistance,
  ESTTravel
}) => {
  return (
    <Content>
      <img className="Planet" src={ImgSrc} />
      <div className="planets-content">
        <div className="top">
          <h1>{Title}</h1>
          <p>{description}</p>
        </div>
        <div className="bottom">
          <div>
            <h3>AVG. DISTANCE</h3>
            <p>{AVGDistance}</p>{" "}
          </div>
          <div>
            <h3>Est. travel time</h3>
            <p>{ESTTravel}</p>{" "}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default SlideContent;
