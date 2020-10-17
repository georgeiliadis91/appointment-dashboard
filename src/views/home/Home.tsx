import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      minHeight: 650,
    },
    title: {
      margin: theme.spacing(3, 1),
    },
  })
);

interface Props {}

export const Home = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Welcome, username
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Notes</Paper>
        </Grid>

        <Grid item sm={8}>
          <Paper className={classes.paper}>Visits for today</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
