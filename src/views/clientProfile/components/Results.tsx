import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import MaterialTable from "material-table";
import { tableIcons } from "../../../components/table-icons";
import { useNavigate } from "react-router-dom";
import { IVisit } from "../../../entities/visit";
import dayjs from "dayjs";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Card } from "../../../components/ui-kit/card/card";
import { Typography } from "../../../components/ui-kit/typography/typography";
import {
  IconButton,
  VisibilityIcon,
} from "../../../components/ui-kit/icons/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
  rowDataColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

interface Props {
  visits: IVisit[];
}

const Results: React.FC<Props> = ({ visits }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.root}>
      <PerfectScrollbar>
        <MaterialTable
          title="Client Visits"
          columns={[
            {
              title: "Date",
              field: "date",
              render: (rowData: IVisit) => (
                <Typography variant="body1">
                  {" "}
                  {dayjs(rowData.date).format("DD.MM.YYYY")}
                </Typography>
              ),
            },
            {
              title: "Reason",
              field: "Reason",
              render: (rowData: IVisit) => (
                <Typography variant="body1">{rowData.reason}</Typography>
              ),
            },

            {
              title: "Charge",
              field: "charge",
              render: (rowData: IVisit) => (
                <Typography variant="body1">{rowData.charge}</Typography>
              ),
            },
            {
              title: "Date of appointment",
              field: "updated_at",
              render: (rowData: IVisit) => (
                <Typography variant="body1">
                  {dayjs(rowData.updated_at).format("DD.MM.YYYY")}
                </Typography>
              ),
            },
            {
              title: "Actions",
              field: "actions",
              render: (rowData: IVisit) => (
                <IconButton
                  onClick={() => {
                    navigate(`/app/visits/${rowData.id}`);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              ),
              type: "numeric",
            },
          ]}
          data={visits}
          options={{
            selection: true,
          }}
          icons={tableIcons}
        />
      </PerfectScrollbar>
    </Card>
  );
};

export default Results;
