import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-margin {
    height: 100%;
  }

  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    gap: 8.2%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;

  height: 100%;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  /* margin-top: 9.625rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 8.2%;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-family: "bellefair";
      opacity: 50.42%;
      letter-spacing: 0;
      font-size: 2rem;
      text-transform: uppercase;
      margin-bottom: 0.9375rem;
    }

    h1 {
      font-family: "bellefair";
      font-size: 3.5rem;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    p {
      margin-top: 1.6875rem;
      font-size: 1.125rem;
      letter-spacing: 0;
      line-height: 2rem;
    }
  }

  .nav {
    display: flex;
    gap: 1.375rem;

    &-item {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 17.44%;
    }

    .hover {
      opacity: 50% !important;
    }

    .active {
      opacity: 100% !important;
    }
  }
`;

export const ContainerRight = styled.div`
  position: relative;
  img {
    position: absolute;
    bottom: 0;
    height: 100%;
  }
`;
export const HomeTitle = styled.div`
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
`;
