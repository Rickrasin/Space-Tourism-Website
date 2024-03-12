import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.0325rem;

    .nav-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;

      .point {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
        width: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;

        font-family: "Bellefair";
        font-size: 1rem;
        letter-spacing: 2px;
        text-align: center;
        &:hover {
          border-color: white;
        }
      }

      .active {
        background-color: #fff;
        color: black;
      }
    }

    .content-margin {
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.0325rem;
    .Planet {
      display: block; /* Garante que a imagem seja exibida como bloco */
      width: 100vw; /* Largura total da viewport */
      height: auto; /* Altura automática para manter a proporção original da imagem */
    }

    .container {
      display: grid;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      gap: 2.75rem;
    }

    .content-container {
      display: flex;

      &-left {
        max-width: 100%;
        img {
          position: absolute;
          right: 0;
          width: 100vw;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h2 {
          letter-spacing: 2.7px;
          font-weight: 400;
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 0.9375rem;
        }

        h1 {
          font-family: "bellefair";
          font-size: 1.5rem;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        p {
          width: 100%;
          margin-top: 1.6875rem;
          font-size: 1.125rem;
          letter-spacing: 0;
          line-height: 1.5625rem;
        }
      }
    }
  }
`;

export const HomeTitle = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: auto;

    .title {
      display: flex;
      gap: 1.75rem;

      font-size: 1;
      font-weight: 500;
      letter-spacing: 0.29531rem;
      text-transform: uppercase;

      h2 {
        color: #fff;
      }

      span {
        opacity: 0.25;
      }
    }
  }
`;
