import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    
    * {
        color: #fff;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
    min-height: 100vh;
    box-sizing: border-box;
    
    }

    ::-webkit-scrollbar {
  width: 3px;
  height: 3px; 
}

    ::-webkit-scrollbar-track {
  background: #030303;
  padding: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #f1f1f1;
  border-radius: 10px;
}

    .app {
    height: 100vh;
    }

    a {
        text-decoration: none;
        font-family: Barlow Condensed;
        font-size: 1rem;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.16875rem;
        text-transform: uppercase;
    }

    h1 {
        color: ${({ theme }) => theme.colors.terciary};
        font-family: Bellefair;
        font-size: 5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    h2 {
        color: ${({ theme }) => theme.colors.secondary};
        font-family: Barlow Condensed;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.29531rem;
    }

    p {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Barlow;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem; 
    }
    
}
    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xxl}) {
    a {
        font-size: 1rem;
    }

    h1 {
        font-size: 9.375rem;
    }

    h2 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1.125rem;
    }
  }

`;

export default GlobalStyles;
