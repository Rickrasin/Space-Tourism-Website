import styled from "styled-components";

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 5fr 8fr;
  grid-template-rows: 1fr;

  height: 6rem;

  .line-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .Line {
      position: absolute;
      margin: 3rem 0;
      left: 3rem;
      width: 100%;
      height: 0.0625rem;
      opacity: 0.2515;
      background-color: #fff;
      z-index: 1;
    }
  }

  .navbar {
    background: rgba(188, 175, 175, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    display: flex;
    height: 100%;

    nav {
      display: flex;
      gap: 3.12rem;
      margin-left: 22%;
      .navbar-item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: ${({ theme }) => theme.colors.terciary};
        font-family: Barlow Condensed;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16875rem;
        border-bottom: 3px solid transparent;
        transition: border-bottom 0.3s ease-in-out;

        &-content {
          display: flex;
          gap: 0.69rem;
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

  .active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.terciary} !important;
    &::before {
      background-color: transparent !important;
    }
  }

  /* .active:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.terciary} !important;
  } */
`;
