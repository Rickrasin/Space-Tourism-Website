import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    

    * {
        color: #fff;
        margin: 0;
    }

    #root {
    min-height: 100vh;
    box-sizing: border-box;
    
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
        font-size: 9.375rem;
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
    
`;

export default GlobalStyles;
