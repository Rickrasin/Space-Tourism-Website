import styled from "styled-components";

// Home Styles

export const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    gap: 3.625rem;

    .content-margin {
      height: 100%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 5rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 4.75rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
