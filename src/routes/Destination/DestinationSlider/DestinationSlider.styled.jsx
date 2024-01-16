import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Nav = styled.nav`
  font-family: Barlow Condensed;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16875rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;

  gap: 2.19rem;

  .navbar-item {
    font-size: 1rem;
    cursor: pointer;
    padding-bottom: 0.75rem;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 0.1875rem solid #fff;
    }
  }

  .active {
    border-bottom: 0.1875rem solid ${({ theme }) => theme.colors.terciary};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;

  .planets-content {
    display: flex;
    flex-direction: column;
    gap: 3.38rem;

    .top {
      margin-top: 2.31rem;
    }

    .bottom {
      display: flex;
      gap: 18%;
      border-top: 1px solid #383b4b;
      padding-top: 1.75rem;

      div {
        
        h3 {
          font-family: "Bellefair";
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 0.875rem;
          line-height: normal;
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
`;
