import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { IClient } from "../../../entities/client";
import PerfectScrollbar from "react-perfect-scrollbar";

import MaterialTable from "material-table";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { tableIcons } from "../../../components/table-icons";
import { Link, useNavigate } from "react-router-dom";
import { dayjs } from "../../../components/dayjs/dayjs";
import { Typography } from "../../../components/ui-kit/typography/typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Avatar } from "../../../components/ui-kit/avatar/avatar";
import { IconButton } from "../../../components/ui-kit/icons/icons";
import { Card } from "../../../components/ui-kit/card/card";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
  rowDataColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
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
          options={{
            paging: true,
            pageSize: 10,
            pageSizeOptions: [10, 20, 50],
            selection: true,
          }}
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
                  <Link to={`/app/clients/${rowData.id}`}>
                    <Typography variant="body1">{rowData.name}</Typography>
                  </Link>
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
                  {dayjs(rowData.updated_at).format("DD.MM.YYYY")}
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
          icons={tableIcons}
        />
      </PerfectScrollbar>
    </Card>
  );
};

export default Results;
