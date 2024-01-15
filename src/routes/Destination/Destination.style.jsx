import styled from "styled-components";
import backgroundImage from "../../assets/destination/background-destination-desktop.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const HomeTitle = styled.div`
  display: flex;
  gap: 1.75rem;

  h2 {
    color: #fff;

    color: #fff;
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0.29531rem;
    text-transform: uppercase;
  }

  span {
    opacity: 0.25;
  }
`;
