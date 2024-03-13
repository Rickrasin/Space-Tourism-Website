import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.0325rem;

    .nav-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;

      .point {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
        width: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;

        font-family: "Bellefair";
        font-size: 1rem;
        letter-spacing: 2px;
        text-align: center;
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

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    .nav-container {
      .point {
        width: 3.75rem;
        height: 3.75rem;

        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    .nav-container {
      flex-direction: column;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.0325rem;
    margin-bottom: 2rem;

    .Planet {
      display: block;
      width: 100%;
      height: auto;
    }

    .container {
      display: grid;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      gap: 2.75rem;
    }

    .content-container {
      display: flex;

      &-left {
        max-width: 100%;
        img {
          right: 0;
          width: 100vw;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h2 {
          letter-spacing: 2.7px;
          font-weight: 400;
          font-size: 0.875rem;
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
          width: 100%;
          margin-top: 1.6875rem;
          font-size: 1.125rem;
          letter-spacing: 0;
          line-height: 1.5625rem;
        }
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    .content-container {
      &-right {
        h2 {
          font-size: 1rem;
        }

        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1;
        }
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      display: flex;
      flex-direction: row;
    }

    .margin-container {
      display: grid;
      height: 100%;
      align-items: center;
      margin-right: 0;

      grid-template-columns: 2fr 1fr;
      .content-container {
        &-right {
          text-align: left;
          align-items: flex-start;

          h2 {
            font-size: 1rem;
          }

          h1 {
            font-size: 3.5rem;
          }

          p {
            font-size: 1.125rem;
            width: 70%;
          }
        }

        &-left {
          right: 0;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    .margin-container {
      .content-container {
        &-right {
        }
      }
    }
  }
`;

export const HomeTitle = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: auto;

    .title {
      display: flex;
      gap: 1.75rem;

      font-size: 1;
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

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin: auto 0;

    .title {
      font-size: 1.25rem;
    }
  }
`;
