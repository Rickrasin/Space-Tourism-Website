import PropTypes from "prop-types";
import styled from "styled-components";

// Estilo do componente de página
const ContentContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-right: 21%;
    margin-left: 21%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 16%;
    margin-left: 16%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-right: 11%;
    margin-left: 5%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    margin-right: 11%;
    margin-left: 11%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

// Componente de página
const ContentMargin = ({ marginLeft, marginRight, className, children }) => {
  return (
    <ContentContainer
      as="div"
      marginLeft={marginLeft}
      marginRight={marginRight}
      className={className}
    >
      {children}
    </ContentContainer>
  );
};

ContentMargin.propTypes = {
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ContentMargin;
