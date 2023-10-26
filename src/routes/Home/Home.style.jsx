import styled from "styled-components";
import backgroundDesktop from "../../assets/home/background-home-desktop.jpg";
// Home Styles

export const Container = styled.div`
  background-image: url(${backgroundDesktop});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8.69rem;
`;
