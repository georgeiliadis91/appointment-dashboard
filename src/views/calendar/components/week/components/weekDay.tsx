import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

interface Props {
  day: string;
}

export const weekDay = ({ day }: Props) => {
  return (
    <div>
      <Typography variant="h6">{day}</Typography>
      WeekDay Content
    </div>
  );
};
