import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyle = styled(motion.button)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    font-size: 1.25rem;
    font-family: Bellefair;
    font-style: normal;
    text-transform: uppercase;
    height: 9.375rem;
    width: 9.375rem;
    border-radius: 50%;
    letter-spacing: 0.125rem;
    cursor: pointer;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 15.125rem;
    width: 15.125rem;
    font-size: 2rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 17rem;
    width: 17rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;
