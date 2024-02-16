import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content-margin {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  gap: 1.4%;

  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 0.29531rem;
  text-transform: uppercase;

  h2 {
    font-size: 28px;
    color: #fff;
  }

  span {
    opacity: 0.25;
  }
`;
