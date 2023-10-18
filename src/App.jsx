import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const theme = {
  colors: {
    primary: "#0B0D17",
    secondary: "#D0D6F9",
    terciary: "#FFF",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
