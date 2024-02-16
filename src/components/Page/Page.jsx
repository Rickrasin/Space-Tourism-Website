import styled from "styled-components";

// Estilo do componente de página
const PageContainer = styled.div`
  background-image: ${(props) => `url(${props.background})` || "white"};
  min-height: 100vh;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// Componente de página
const Page = ({ background, children }) => {
  return <PageContainer background={background}>{children}</PageContainer>;
};

export default Page;
