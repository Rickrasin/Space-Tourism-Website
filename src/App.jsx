import { Outlet } from "react-router-dom";
// import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const theme = {
  colors: {
    primary: "#0B0D17",
    secondary: "#D0D6F9",
    terciary: "#FFF"
  },
  breakpoints: {
    sm: "320px", //Celulares
    md: "768px", //Tablets
    lg: "992px", // Desktops
    xl: "1200px", //Desktops
    xxl: "1600px" //Laptops e Desktops Grandes
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
