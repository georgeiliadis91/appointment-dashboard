import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import routes from "./routes";
import { theme } from "./theme/applicationTheme";

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
