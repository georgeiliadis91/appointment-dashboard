import React from "react";
import dayjs from "dayjs";
import Typography from "@material-ui/core/Typography/Typography";
import { getFirstDayOfMonth } from "../../../../helpers/dateHelpers";

interface Props {}
export const Month = (props: Props) => {
  return (
    <div>
      <Typography variant="h6">
        {dayjs(getFirstDayOfMonth()).format("DD-MM-YY")}
      </Typography>
    </div>
  );
};
