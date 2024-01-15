import { Container, Content, NavGrid, Nav } from "./DestinationSlider.styled";
import Moon from "../../assets/destination/image-moon.png";

const DestinationSlider = () => {
  return (
    <Container>
      <NavGrid className="nav-grid">
        <div></div>
        <Nav>
          <p className="navbar-item">Moon</p>
          <p className="navbar-item">MARS</p>
          <p className="navbar-item">EUROPA</p>
          <p className="navbar-item">TITAN</p>
        </Nav>
      </NavGrid>
      <Content>
        <img className="Planet" src={Moon} />
        <div>
          <div className="top">
            <h1>MOON</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <div className="line" />
          <div className="bottom">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>384,400 KM</p>{" "}
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>3 days</p>{" "}
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default DestinationSlider;
