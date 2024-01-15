import styled from "styled-components";
import backgroundImage from "../../assets/home/background-home-desktop.jpg";

// Home Styles

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
