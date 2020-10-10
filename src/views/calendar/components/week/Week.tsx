import React, { Fragment, useState } from "react";
import dayjs from "dayjs";
import { getPrevMonday } from "../../../../helpers/dateHelpers";
import { WeekDay } from "./components/WeekDay";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const useStyles = makeStyles((theme: Theme) => ({
  weekDay: {
    display: "flex",
    flexDirection: "row",
    alignContent: "stretch",
    backgroundColor: theme.palette.background.paper,
  },
  dayItem: {
    flex: 1,
  },
}));

interface Props {}

const initialColumns = {
  Monday: {
    id: "Monday",
    list: ["item 1", "item 2", "item 3"],
  },
  Tuesday: {
    id: "Tuesday",
    list: [],
  },
  Wednesday: {
    id: "Wednesday",
    list: [],
  },
  Thursday: {
    id: "Thursday",
    list: [],
  },
  Friday: {
    id: "Friday",
    list: [],
  },
  Saturday: {
    id: "Saturday",
    list: [],
  },
  Sunday: {
    id: "Sunday",
    list: [],
  },
};

export const Week = ({}: Props) => {
  const classes = useStyles();
  let days: string[] = [];

  const [columns, setColumns] = useState(initialColumns);

  // Getting array of weekdays with dates
  for (let index = 0; index < 7; index++) {
    days.push(dayjs(getPrevMonday()).add(index, "day").toISOString());
  }

  const onDragEnd = (result: any) => {
    // Make sure we have a valid destination
    const { source, destination, draggableId } = result;
    if (destination === undefined || destination === null) return null;
    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = (columns as any)[source.droppableId];
    const end = (columns as any)[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <div className={classes.weekDay}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(columns).map((col, index) => (
          <div className={classes.dayItem}>
            <WeekDay col={col} key={col.id} day={days[index]} />
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};
