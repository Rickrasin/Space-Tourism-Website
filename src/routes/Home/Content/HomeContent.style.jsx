import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10.31rem;

  .content-container {
    display: flex;
    flex-direction: column;
    width: 50%;
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
