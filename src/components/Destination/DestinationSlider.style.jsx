import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  div {
    display: flex;
    flex-direction: column;

    div {
      h1 {
        font-family: "Bellefair";
        font-size: 6.25rem;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  height: 6rem;

  .navbar {
    display: flex;
    flex-direction: row;
    gap: 2.19rem;
    text-transform: uppercase;
    letter-spacing: 0.16875rem;

    .navbar-item {
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.52);
      }
    }

    .active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.terciary};
    }
  }
`;
