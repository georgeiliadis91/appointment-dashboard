import React from "react";
import dayjs from "dayjs";
import { getPrevMonday } from "../../../../helpers/dateHelpers";
import { WeekDay } from "./components/WeekDay";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) => ({
  weekDay: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {}

export const Week = ({}: Props) => {
  const classes = useStyles();
  let days: string[] = [];

  // Getting array of weekdays with dates
  for (let index = 0; index < 7; index++) {
    days.push(dayjs(getPrevMonday()).add(index, "day").toISOString());
  }

  return (
    <div className={classes.weekDay}>
      {days.map((item) => {
        return item;
      })}
    </div>
  );
};
