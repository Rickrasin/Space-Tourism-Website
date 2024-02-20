import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 1.5rem;

    &-subtitle {
      text-transform: uppercase;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;
