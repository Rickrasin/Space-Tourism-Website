import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.75rem;

  .content-margin {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  gap: 1.75rem;

  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 0.29531rem;
  text-transform: uppercase;

  h2 {
    color: #fff;
  }

  span {
    opacity: 0.25;
  }
`;
