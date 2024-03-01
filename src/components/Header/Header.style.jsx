import styled from "styled-components";

//Header styles

export const HeaderContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;

    .logo {
      margin-left: 6%;
      height: 2rem;
      width: 2rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: 0;
    .logo {
      margin-left: 2.4375rem;
      height: 3rem;
      width: 3rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {

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
