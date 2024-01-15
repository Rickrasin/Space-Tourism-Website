import Header from "../../components/Header/Header";
import { Container, HomeTitle } from "./Destination.style";
import DestinationSlider from "../../components/Destination/DestinationSlider";
const Destination = () => {
  return (
    <Container>
      <Header />
      <HomeTitle>
        <h2>
          <span>01 </span> Pick your Destination
        </h2>
      </HomeTitle>
      <DestinationSlider />
    </Container>
  );
};

export default Destination;
