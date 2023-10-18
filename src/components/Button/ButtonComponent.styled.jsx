import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-size: 2rem;
  font-family: Bellefair;
  font-style: normal;
  text-transform: uppercase;
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  letter-spacing: 0.125rem;
`;
