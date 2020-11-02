import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import { theme } from "./theme/applicationTheme";
import AlertComponent from "./components/helper-components/AlertComponent";

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {routing}
      <AlertComponent />
    </ThemeProvider>
  );
}

export default App;
