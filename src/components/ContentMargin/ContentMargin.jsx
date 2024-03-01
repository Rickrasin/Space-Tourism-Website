import PropTypes from "prop-types";
import styled from "styled-components";

// Estilo do componente de página
const ContentContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-right: 6%;
    margin-left: 6%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 14%;
    margin-left: 14%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-right: 11%;
    margin-left: 11%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {

  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
  }
`;

// Componente de página
const ContentMargin = ({ className, children }) => {
  return (
    <ContentContainer
      as="div"
      className={className}
    >
      {children}
    </ContentContainer>
  );
};

ContentMargin.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ContentMargin;
