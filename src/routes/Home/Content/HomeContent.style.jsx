import styled from "styled-components";

export const HomeContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 1.5rem;

      h2 {
        text-transform: uppercase;
        font-size: 1rem;
      }

      p {
        text-align: center;
        font-size: 0.9375rem;
      }
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 4.0625rem;
    .content-container {
      h2 {
        font-size: 1.25rem;
      }
      h1 {
        font-size: 9.375rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .content-container {
      align-items: start;

      h2 {
        font-size: 1.75rem;
      }

      h1 {
      }
      p {
        font-size: 1.25rem;
        text-align: left;
      }
    }
    .button-container {
     justify-content: flex-end;

    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    .content-container {
      h1 {
        font-size: 9.375rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
