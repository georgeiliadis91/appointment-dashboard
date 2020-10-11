import React, { useState } from "react";
import { IClient } from "../../../entities/client";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import MaterialTable from "material-table";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { tableIcons } from "../../../components/table-icons";
import { useNavigate } from "react-router-dom";
import { IVisit } from "../../../entities/visit";
import { CalendarViewDayOutlined } from "@material-ui/icons";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
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
