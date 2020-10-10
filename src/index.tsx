import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';
import App from "./App";

import GlobalStyles from "./theme/GlobalStyles";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// serviceWorker.unregister();
