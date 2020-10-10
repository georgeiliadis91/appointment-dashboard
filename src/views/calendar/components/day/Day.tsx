import React from "react";
import dayjs from "dayjs";
import Typography from "@material-ui/core/Typography/Typography";

interface Props {}

export const Day = (props: Props) => {
  return (
    <div>
      {" "}
      <Typography variant="h6">{dayjs(Date.now()).format("dddd")}</Typography>
    </div>
  );
};
