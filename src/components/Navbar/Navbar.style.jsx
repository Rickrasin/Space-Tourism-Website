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
    display: flex;
    flex-direction: row;
    margin-left: 7.69rem;
    gap: 3.13rem;
    height: 100%;

    .navbar-item {
      display: flex;
      flex-direction: row;
      margin: 2.3rem 0;
      height: 100%;
      gap: 0.69rem;

      span {
        font-weight: bold;
      }

      /* &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.52);
      } */
    }

    .active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary};
    }

    .active:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary};
    }
  }
`;
