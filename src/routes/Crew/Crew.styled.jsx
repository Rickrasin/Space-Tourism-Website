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
      grid-template-rows: 1fr 4fr;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    /* margin-top: 9.625rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    gap: 8.2%;
  }
`;

export const ContainerLeft = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: grid;
    grid-template-rows: 8fr 1fr;
    justify-content: space-evenly;
    align-items: flex-start;
    justify-items: start;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-family: "bellefair";
        opacity: 50.42%;
        letter-spacing: 0;
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 0.9375rem;
      }

      h1 {
        font-family: "bellefair";
        font-size: 3.5rem;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      p {
        margin-top: 1.6875rem;
        font-size: 1.125rem;
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
`;

export const ContainerRight = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      width: 80%;
    }
  }
`;
export const HomeTitle = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
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
    }
  }
`;
