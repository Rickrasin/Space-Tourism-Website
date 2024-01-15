import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`

  .container-title {
    margin-top: 4.75rem;
    color: #fff;
    font-family: "Barlow Condensed";
    font-weight: 400;
    font-size: 1.75rem;
    letter-spacing: 0.29531rem;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 700;
      opacity: 0.25;
    }
  }
`;

export const SwiperContainer = styled(Swiper)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column-reverse;

  .swiper-pagination-container {
    display: grid;
    grid-template-columns: 8fr 5fr;

    .swiper-pagination {
      display: flex;
      justify-content: start;
      gap: 2.19rem;

      &-bullet {
        text-transform: uppercase;
        font-family: "Barlow Condensed";

        color: ${({ theme }) => theme.colors.secondary};

        padding-bottom: 0.75rem;
        letter-spacing: 0.16875rem;

        &:hover {
          cursor: pointer;
          border-bottom: 2px solid rgba(255, 255, 255, 0.5);
        }
        &-active {
          color: #fff;
          border-bottom: 2px solid #fff !important;
        }
      }
    }
  }

  .swiper-wrapper {
    .swiper-slide {
      display: grid;
      grid-template-columns: 8fr 5fr;

      .left-container {

        // A imagem ta sendo um problema
        // Consertar background e home 
      }

      .right-container {
        margin-top: 2.31rem;
        display: flex;
        flex-direction: column;
        gap: 3.37rem;
        .desc-container {
          h1 {
            font-size: 6.25rem;
            font-family: "Bellefair";
            text-transform: uppercase;
          }
          p {
          }
        }
        .bottom-container {
          display: flex;
          gap: 4.94rem;

          &-item {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            &-title {
              color: ${({ theme }) => theme.colors.secondary};

              font-family: Barlow Condensed;
              font-size: 0.875rem;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.14763rem;
              text-transform: uppercase;
            }

            &-text {
              color: #fff;
              font-family: "Bellefair";
              font-size: 1.75rem;
              font-weight: 400;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
`;
