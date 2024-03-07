import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav-container {
      display: flex;
      gap: 1.5rem;
      flex-direction: row;

      .sphere {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        opacity: 17.44%;
        background-color: #fff;
        cursor: pointer;

        &:hover {
          opacity: 50.01%;
        }
      }

      .active {
        opacity: 100%;
      }
    }

    .content-margin {
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 11fr;
      margin-top: 1.5rem;
      gap: 2rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    .nav-container {
      .sphere {
        height: 10px;
        width: 10px;
      }
    }

    .content-margin {
      grid-template-rows: 1fr;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    /* margin-top: 9.625rem; */
    display: grid;
    grid-template-rows: 1fr 2fr;
    align-items: start;
    gap: 2rem;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;

    gap: 0;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const ContainerLeft = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    justify-items: start;
    gap: 2rem;
    order: 1;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      h2 {
        font-family: "bellefair";
        opacity: 50.42%;
        letter-spacing: 0;
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 0.9375rem;
      }

      h1 {
        font-family: "bellefair";
        font-size: 1.5rem;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      p {
        margin-top: 1.6875rem;
        font-size: 0.9375rem;
        letter-spacing: 0;
        line-height: 2rem;
      }
    }
  }

  .nav {
    display: flex;
    gap: 1.375rem;

    &-item {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 17.44%;
    }

    .hover {
      opacity: 50% !important;
    }

    .active {
      opacity: 100% !important;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const ContainerRight = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid #383b4b;
    img {
      height: 14rem;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
export const HomeTitle = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      display: flex;
      gap: 1rem;

      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.29531rem;
      text-transform: uppercase;
      justify-content: center;

      h2 {
        color: #fff;
      }

      span {
        opacity: 0.25;
      }
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    .title {
      justify-content: flex-start;
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
