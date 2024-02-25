import PropTypes from "prop-types";
import styled from "styled-components";

// Estilo do componente de página
const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    background-image: ${(props) => `url(${props.mobileBackground})` || "white"};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    background-image: ${(props) => `url(${props.tabletBackground})` || "white"};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    background-image: ${(props) => `url(${props.desktopBackground})` || "white"};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    background-image: ${(props) => `url(${props.desktopBackground})` || "white"};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    background-image: ${(props) => `url(${props.desktopBackground})` || "white"};
  }
`;

// Componente de página
const Page = ({ mobileBackground, tabletBackground, desktopBackground, children }) => {
  return (
    <PageContainer
      mobileBackground={mobileBackground}
      tabletBackground={tabletBackground}
      desktopBackground={desktopBackground}
    >
      {children}
    </PageContainer>
  );
};

Page.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element
};

export default Page;
