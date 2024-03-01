import styled from "styled-components";

export const Nav = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-around;
    margin-right: 6%;

    .active {
      display: flex !important;
    }

    .hamburguer {
      display: block;
      margin: auto 0;
      cursor: pointer;
    }

    .navbar {
      position: absolute;
      display: none;
      flex-direction: column;
      gap: 4.0625rem;
      top: 0;
      right: 0;
      padding-top: 2.125rem;
      width: 70%;
      height: 100vh;

      z-index: 1000;

      background: rgba(188, 175, 175, 0.04);
      backdrop-filter: blur(40.774227142333984px);

      .close {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        img {
          margin-right: 1.65625rem;
        }
      }
      nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-left: 2rem;
        height: 100%;
      }
    }

    /* .active:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.terciary} !important;
  } */
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 0;
    height: 6rem;

    .line-container {
      display: none;
    }

    .navbar {
      position: absolute;
      display: flex;
      background: rgba(188, 175, 175, 0.04);
      backdrop-filter: blur(40.774227142333984px);
      height: 6rem;
      right: 0;
      padding-top: 0;

      .close {
        display: none;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 2.3125rem;
        padding: 0 3rem;
        .navbar-item {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: ${({ theme }) => theme.colors.terciary};

          border-bottom: 3px solid transparent;
          transition: border-bottom 0.3s ease-in-out;

          &-content {
            font-family: Barlow Condensed;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.16875rem;
            b {
              display: none;
            }
          }

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
      }
    }

    .hamburguer {
      display: none;
    }

    .active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary} !important;
      &::before {
        background-color: transparent !important;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 2fr 6fr;
    height: 6rem;
    margin-top: 1%;

    .line-container {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: flex-end;
      z-index: 100;

      .Line {
        position: absolute;
        margin: 3rem 0;
        left: 3rem;
        width: 100%;
        height: 0.0625rem;
        opacity: 0.2515;
        background-color: #fff;
        z-index: 100;
      }
    }

    .navbar {
      position: initial;
      z-index: 0;
      width: 100%;
      nav {
        margin-left: 22%;
        height: 100%;
        padding: 0;

        .navbar-item {
          &-content {
            display: flex;
            font-size: 0.875rem;
            gap: 0.69rem;
            b {
              display: block;
            }
          }

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
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: 4fr 6fr;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
