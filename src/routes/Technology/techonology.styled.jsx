import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;

    .nav-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      .point {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 80px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;

        font-family: "Bellefair";
        font-size: 2rem;
        letter-spacing: 2px;
        &:hover {
          border-color: white;
        }
      }

      .active {
        background-color: #fff;
        color: black;
      }
    }

    .content-margin {
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: grid;
    grid-template-rows: 2fr 6fr;
    height: 100%;

    .title {
    }

    .container {
      display: flex;
      gap: 5rem;
      
      }

      .content-container {
        display: grid;
        grid-template-columns: 5fr 2fr;
        gap: 8.125rem;

        &-left {
          display: grid;
          grid-template-rows: 1fr 1fr 4fr;
          h2 {
            letter-spacing: 2.7px;
            font-weight: 400;
            font-size: 1rem;
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
            width: 70%;
            margin-top: 1.6875rem;
            font-size: 1.125rem;
            letter-spacing: 0;
            line-height: 2rem;
          }
        }

        &-right {
          img {
            position: absolute;
            right: 0;
            height: 60%;
          }
        }
      }
    }
  }
`;

export const HomeTitle = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: auto 0;

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
