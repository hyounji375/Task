import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyles from "./style/global";
import Routing from "./routers/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={Routing} />
    </ThemeProvider>
  );
}

export default App;
