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
        .navbar-item-content {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 0.69rem;

          color: ${({ theme }) => theme.colors.terciary};
          font-family: Barlow Condensed;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.16875rem;
        }
        &:hover {
          border-bottom: 3px solid rgba(255, 255, 255, 0.52);
        }
      }
    }

    .active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary};
    }

    .active:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary};
    }
  }
`;
