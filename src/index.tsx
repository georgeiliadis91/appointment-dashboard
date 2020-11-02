import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { globalStore } from "./redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import GlobalStyles from "./theme/GlobalStyles";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Provider store={globalStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
