import React from "react";
import { useDispatch } from "react-redux";
import { AppBar } from "../../../components/ui-kit/appbar/appbar";
import {
  AccountCircle,
  IconButton,
} from "../../../components/ui-kit/icons/icons";
import { Menu, MenuItem } from "../../../components/ui-kit/menu/menu";
import { Toolbar } from "../../../components/ui-kit/toolbar/toolbar";
import { Typography } from "../../../components/ui-kit/typography/typography";
import { triggerSignOut } from "../../../redux/user/actions";

import { useStyles } from "./navigation.style";

export default function Navigation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(triggerSignOut());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Appointment DashBoard
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
