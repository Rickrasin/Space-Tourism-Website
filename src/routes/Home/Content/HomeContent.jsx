import { HomeContainer } from "./HomeContent.style";
import ButtonComponent from "../../../components/Button/ButtonComponent";

const HomeContent = () => {
  return (
    <HomeContainer>
      <div className="content-container">
        <h2 className="content-container-subtitle">
          So, You Want To Travel To
        </h2>
        <h1 className="Title">SPACE</h1>
        <p className="text-content">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="button-container">
        <ButtonComponent buttonName={"Explore"} />
      </div>
    </HomeContainer>
  );
};

export default HomeContent;
