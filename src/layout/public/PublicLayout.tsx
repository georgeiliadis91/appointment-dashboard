import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useStyles } from "./public.style";
import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const PublicLayout = () => {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if (isAuthenticated) {
    return <Navigate to={`app/`} />;
  } else {
    return (
      <div className={classes.root}>
        <CssBaseline />

        <main className={classes.content}>
          {/* <Toolbar /> */}
          <Outlet />
        </main>
      </div>
    );
  }
};
