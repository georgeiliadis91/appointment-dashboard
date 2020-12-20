import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import { theme } from "./theme/applicationTheme";
import AlertComponent from "./components/helper-components/AlertComponent/AlertComponent";
import {  LocalStore } from "./helpers/storage";
import { useTriggerError } from "./redux/alert/hooks";
import { checkToken } from "./services/user";
import { useTriggerRefreshLogin } from "./redux/user/hooks";

function App() {
  const routing = useRoutes(routes);
  const errorAlert = useTriggerError();
  const verifyToken = useTriggerRefreshLogin();

  useEffect(() => {
    const checkAuth = async () => {
      try{
        //Verifiying existed token with backend
        const response = await checkToken();
        if(response?.confirmed){
          verifyToken();
        }
      } catch (error) {
        errorAlert(error.message);
      }
    };

    const token = LocalStore.get("token");
    if (token) {
      checkAuth();
    }

    // The reason tis ok to disable the eslint error message here is that 
    // the redux dispatch points at a stable result so although the call back is created everytime
    // it is perfectly safe to ignore on this scenario.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <ThemeProvider theme={theme}>
      {routing}
      <AlertComponent />
    </ThemeProvider>
  );
}

export default App;
