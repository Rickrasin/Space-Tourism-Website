import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  /* margin-top: 4.75rem; */
  .title {
    display: flex;
    gap: 1.75rem;

    font-size: 1.75rem;
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

  .content-container {
    /* margin-top: 9.625rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;

    .container-left {
      background-color: darkred;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-family: "bellefair";
        opacity: 50.42%;
        letter-spacing: 0;
        font-size: 2rem;
        text-transform: uppercase;
      }

      h1 {
        font-family: "bellefair";
        font-size: 3.5rem;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      p {
        font-size: 1.125rem;
        letter-spacing: 0;
        line-height: 2rem;
      }
    }

    .container-right {
      background-color: red;
      position: relative;
      img {
        position: absolute;
        bottom: 0;
        display: flex;
        height: 69vh;
      }
    }
  }
`;

export const HomeTitle = styled.div``;
