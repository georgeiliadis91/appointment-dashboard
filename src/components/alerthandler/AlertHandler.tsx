import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// On the component that it is implemented we need to save a state of errorMessage,setErrorMessage that are passed as prop to the component.

interface IAlertHandlerProps {
  severity: AlertType;
  errorMessage?: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export type AlertType = "error" | "warning" | "info" | "success";

export const AlertHandler: React.FC<IAlertHandlerProps> = ({
  errorMessage,
  setErrorMessage,
  severity,
}) => {
  if (errorMessage) {
    return (
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        onClose={() => setErrorMessage("")}
      >
        <MuiAlert severity={severity}>{errorMessage}</MuiAlert>
      </Snackbar>
    );
  }
  return null;
};
