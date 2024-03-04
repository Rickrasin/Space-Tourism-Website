import styled from "styled-components";

export const HomeContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5.0625rem;

    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 1rem;

      &-subtitle {
        text-transform: uppercase;
        font-size: 1rem;
      }

      .text-content {
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
    gap: 1rem;
    .content-container {
      &-subtitle {
        font-size: 1.25rem;
      }
      .Title {
        font-size: 9.375rem;
        line-height: 7.875rem;
      }
      .text-content {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .content-container {
      align-items: start;

      &-subtitle {
        font-size: 1.75rem;
      }

      .Title {
      }
      .text-content {
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
      .Title {
        font-size: 9.375rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
