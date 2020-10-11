import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import Paper from "@material-ui/core/Paper/Paper";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface AppointmentProps {
  text: string;
  index: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  appointmentItem: {
    border: "1px solid #b7b7b7",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    minHeight: theme.spacing(5),
    margin: theme.spacing(0.5, 0.25),
    background: blue[200],
  },
}));

const Appointment: React.FC<AppointmentProps> = ({ text, index }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div
          className={classes.appointmentItem}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
};

export default Appointment;
