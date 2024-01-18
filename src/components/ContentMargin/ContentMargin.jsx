import styled from "styled-components";

// Estilo do componente de página
const ContentContainer = styled.div`
  margin-right: ${(props) => props.marginRight || "10.41rem"};
  margin-left: ${(props) => props.marginLeft || "10.41rem"};
`;

// Componente de página
// eslint-disable-next-line react/prop-types
const ContentMargin = ({ marginLeft, marginRight, className, children }) => {
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
