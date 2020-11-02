import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MuiAlert from "../ui-kit/alert/alert";
import { ActionTypes, triggerClose } from "../../redux/alert/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { Snackbar } from "../ui-kit/snackbar/snackbar";
import { AlertProps } from "@material-ui/lab/Alert/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { open, type, message } = useSelector((state: AppState) => state.alert);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(triggerClose());
  };

  // CLOSE is skipped intentionality cause we want undefined to be a type based on the requirements of the application
  const severityType = () => {
    switch (type) {
      case ActionTypes.ERROR:
        return "error";
      case ActionTypes.WARNING:
        return "warning";
      case ActionTypes.SUCCESS:
        return "success";
      case ActionTypes.INFO:
        return "info";
      default:
        return undefined;
    }
  };

  return (
    <div className={classes.root}>
      {/* Checking the message in case of empty */}
      {message != "" && (
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severityType()}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
