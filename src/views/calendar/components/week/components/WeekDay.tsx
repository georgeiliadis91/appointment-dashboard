import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import dayjs from "dayjs";
import Paper from "@material-ui/core/Paper/";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Droppable } from "react-beautiful-dnd";
import Appointment from "./Appointment";
import { inherits } from "util";

const useStyles = makeStyles((theme: Theme) => ({
  dayContainer: {
    minHeight: "750px",
    margin: theme.spacing(0, 1),
    border: "1px solid #ccc",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 0.75),
  },
  dayHeader: {
    margin: theme.spacing(1, 1.5),
  },
  dropArea: {
    minHeight: "750px",
  },
}));

interface IWeekDayProps {
  col: {
    id: string;
    list: string[];
  };
  day: string;
}

export const WeekDay = ({ col: { list, id }, day }: IWeekDayProps) => {
  const classes = useStyles();
  const [date, setDate] = useState(day);
  return (
    <Fragment>
      <Typography variant="h5" className={classes.dayHeader}>
        {dayjs(date).format("dddd, DD - MMM")}
      </Typography>
      <Droppable droppableId={id}>
        {(provided) => (
          <div className={classes.dayContainer}>
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.dropArea}
            >
              {list.map((text, index) => (
                <Appointment key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </Fragment>
  );
};
