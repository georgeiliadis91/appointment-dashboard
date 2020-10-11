import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { IClient } from "../../../entities/client";
import moment from "moment";
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
  clients: IClient[];
}

const Results: React.FC<Props> = ({ clients }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.root}>
      <PerfectScrollbar>
        <MaterialTable
          title="Client List"
          columns={[
            {
              title: "Name",
              field: "name",
              render: (rowData: IClient) => (
                <div className={classes.rowDataColumn}>
                  <Avatar
                    className={classes.avatar}
                    key={rowData.id}
                    alt={rowData.name}
                    src={rowData.image}
                  />
                  <Typography variant="body1">{" " + rowData.name}</Typography>
                </div>
              ),
            },
            {
              title: "Phone",
              field: "phone",
              render: (rowData: IClient) => (
                <Typography variant="body1">{rowData.phone}</Typography>
              ),
            },
            {
              title: "Address",
              field: "address",
              render: (rowData: IClient) => (
                <Typography variant="body1">{rowData.address}</Typography>
              ),
            },
            {
              title: "Email",
              field: "email",
              render: (rowData: IClient) => (
                <Typography variant="body1">{rowData.email}</Typography>
              ),
            },
            {
              title: "Last Updated",
              field: "updated_at",
              render: (rowData: IClient) => (
                <Typography variant="body1">
                  {moment(rowData.updated_at).format("DD.MM.YYYY")}
                </Typography>
              ),
            },
            {
              title: "Actions",
              field: "actions",
              render: (rowData: IClient) => (
                <IconButton
                  onClick={() => {
                    navigate(`/app/clients/${rowData.id}`);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              ),
              type: "numeric",
            },
          ]}
          data={clients}
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
