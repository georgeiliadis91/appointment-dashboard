import React from "react";
import { Grid } from "../../components/ui-kit/grid/grid";
import { Paper } from "../../components/ui-kit/paper/paper";
import { Typography } from "../../components/ui-kit/typography/typography";
import { useStyles } from "./home.style";

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
