import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content-margin {
      display: flex;
      height: 100%;
      align-items: center;
    }
    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    .title {
      align-items: initial;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const HomeTitle = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;

    gap: 1.125rem;

    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.29531rem;
    text-transform: uppercase;

    h2 {
      font-size: 1rem;
      color: #fff;
    }

    span {
      font-size: 1rem;
      opacity: 0.25;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    h2 {
      font-size: 1.25rem;
    }

    span {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 1.4%;

    h2 {
      font-size: 1.75rem;
    }

    span {
      font-size: 1.75rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
