import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  top: 2.5rem;
  width: 66%;
  height: 6rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(3vh);

  .navbar {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 7.69rem;
    height: 100%;
    width: 100%;

    .navbar-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 0.69rem;
      height: 100%;

      &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.52);
      }

      p {
        margin: 0;
      }

      span {
        font-weight: bold;
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
