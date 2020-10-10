import React, { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import dayjs from "dayjs";
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) => ({
  weekDay: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  day: string;
}

export const WeekDay = ({ day }: Props) => {
  const [date] = useState(day);
  return (
    <Paper>
      <Typography variant="h6">{dayjs(date).format("dddd")}</Typography>
    </Paper>
  );
};
