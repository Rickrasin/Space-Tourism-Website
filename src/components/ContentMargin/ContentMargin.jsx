import styled from "styled-components";

// Estilo do componente de página
const ContentContainer = styled.div`
  margin-right: ${(props) => props.marginRight || "11%"};
  margin-left: ${(props) => props.marginLeft || "11%"};
`;

// Componente de página
// eslint-disable-next-line react/prop-types
const ContentMargin = ({ marginLeft = "11%", marginRight = "11%", className, children }) => {
  return (
    <ContentContainer
      marginLeft={marginLeft}
      marginRight={marginRight}
      className={className}
    >
      {children}
    </ContentContainer>
  );
};

export default ContentMargin;
