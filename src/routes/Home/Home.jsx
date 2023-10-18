import Header from "../../components/Header/Header";
import HomeContent from "./Content/HomeContent";

import { Container } from "./Home.style";

const Home = () => {
  return (
    <Container className="h-container">
      <Header />
      <HomeContent />
    </Container>
  );
};

export default Home;
