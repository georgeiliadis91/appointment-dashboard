import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import dayjs from "dayjs";
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) => ({
  dayContainer: {
    minHeight: "750px",
    margin: theme.spacing(0, 1),
    border: "1px solid #ccc",
    borderRadius: theme.spacing(2),
  },
  dayHeader: {
    margin: theme.spacing(1, 1.5),
  },
}));

interface Props {
  day: string;
}

export const WeekDay = ({ day }: Props) => {
  const classes = useStyles();
  const [date, setDate] = useState(day);
  return (
    <Fragment>
      <Typography variant="h5" className={classes.dayHeader}>
        {dayjs(date).format("dddd, DD - MMM")}
      </Typography>
      <div className={classes.dayContainer}></div>
    </Fragment>
  );
};
