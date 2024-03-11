import styled from "styled-components";

export const NavContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    justify-content: start;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const Nav = styled.nav`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-family: Barlow Condensed;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16875rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    gap: 2.1875rem;

    .navbar-item {
      font-size: 1rem;
      cursor: pointer;
      padding-bottom: 0.75rem;
      border-bottom: 3px solid transparent;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        background-color: #979797;
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
        transform: translateX(-50%);
      }

      &:hover {
        &::before {
          width: 100%;
          left: 50;
        }
      }
    }

    .active {
      border-bottom: 0.1875rem solid ${({ theme }) => theme.colors.terciary};
      &::before {
        background-color: transparent !important;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;

    .left-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .img {
        margin: 0 auto;
        width: 45%;
        img {
          width: 100%;
        }
      }
    }

    .planets-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      &-container {
        display: flex;
        flex-direction: column;
        margin: auto;

        gap: 2rem;
        .top {
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-size: 3.5rem;
            text-transform: uppercase;
            font-weight: 400;
          }

          p {
            font-family: "Barlow Condensed";
            font-size: 0.9375rem;
            font-weight: 400;
            letter-spacing: 0.14763rem;
            line-height: 32px;
            text-align: center;
          }
        }

        .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          border-top: 1px solid #383b4b;
          padding-top: 2rem;

          div {
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 0.75rem;
            h3 {
              font-family: "Barlow Condensed";
              font-size: 0.875rem;
              font-weight: 300;
              color: ${({ theme }) => theme.colors.secondary};
              letter-spacing: 0.14763rem;
              text-transform: uppercase;
            }

            p {
              font-family: "Bellefair";
              color: ${({ theme }) => theme.colors.terciary};
              font-size: 1.75rem;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 2.5rem;
    .left-container {
      gap: 3.75rem;
    }

    .planets-content {
      &-container {
        .top {
          .p {
            line-height: 1.75rem;
          }

          h1 {
            font-size: 5rem;
          }
        }
        .bottom {
          flex-direction: row;
          justify-content: space-around;
          padding-top: 1.75rem;
        }
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7.5%;
    margin-top: 0;
    .left-container {
      .img {
        width: 100%;

        img {
          width: 76%;
        }
      }
    }

    .planets-content {
      gap: 1.5625rem;

      &-container {
        font-size: 6.25rem;
        gap: 3.375rem;
        margin: 0;

        .top {
          align-items: flex-start;
          gap: 2.56rem;
          p {
            font-size: 1.125rem;
            text-align: left;
          }
        }

        .bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 1.75rem;

          p {
            font-size: 1.125rem;
            text-align: left;
          }
        }

        div {
          align-items: flex-start;
        }
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
