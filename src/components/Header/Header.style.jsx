import styled from "styled-components";

//Header styles

export const HeaderContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 2.0625rem;

    .logo {
      height: 2rem;
      width: 2rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: space-between;

    padding-top: 0;
    .logo {
      margin-left: 2.4375rem;
      height: 3rem;
      width: 3rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-top: 2.5rem;

    .logo {
      margin-left: 50%;
    }

    display: grid;
    grid-template-columns: 1fr 13fr;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
