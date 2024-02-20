import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 12fr;
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
  grid-template-columns: 1fr 1fr;
  align-content: center;

  .img {
    margin: 0 auto;
    width: 70%;
    img {
      width: 100%;
    }
  }

  .planets-content {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 3.375rem;

    .top {
      display: flex;
      flex-direction: column;
      gap: 2.56rem;

      h1 {
        font-size: 100px;
        text-transform: uppercase;
        font-weight: 400;
      }

      p {
        font-family: "Barlow Condensed";
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.14763rem;
        line-height: 32px;
      }
    }

    .bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18%;
      border-top: 1px solid #383b4b;
      padding-top: 1.75rem;

      div {
        display: flex;
        flex-direction: column;

        gap: 0.75rem;
        h3 {
          font-family: "Barlow Condensed";
          font-size: 14px;
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
`;
