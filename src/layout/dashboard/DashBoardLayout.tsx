import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

import Navigation from "./component/Navigation";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { Drawer } from "../../components/ui-kit/drawer/drawer";
import { InboxIcon } from "../../components/ui-kit/icons/icons";
import {
  List,
  ListItem,
  ListItemIcon,
} from "../../components/ui-kit/list/list";
import { Toolbar } from "../../components/ui-kit/toolbar/toolbar";
import { Divider } from "../../components/ui-kit/divider/divider";
import { CssBaseline } from "@material-ui/core";
import { useStyles } from "./dashboard.styles";

export const DashBoardLayout = () => {
  const classes = useStyles();

  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  } else {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.appBar}>
          <Navigation />
        </div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/app">
                <ListItem button key={1}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  Home
                </ListItem>
              </Link>
              <Link to="/app/clients">
                <ListItem button key={2}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  Clients
                </ListItem>
              </Link>
              <Link to="/app/calendar">
                <ListItem button key={2}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  Calendar
                </ListItem>
              </Link>
              <Link to="/app/visits">
                <ListItem button key={2}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  Visits
                </ListItem>
              </Link>
            </List>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Outlet />
        </main>
      </div>
    );
  }
};
