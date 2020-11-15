import React from "react";
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
import { IVisit } from "../../../entities/visit";

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
  visits: IVisit[];
}

const Results: React.FC<Props> = ({ visits }) => {
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
            tableLayout: "auto"
          }}
          columns={[
            {
              title: "Name",
              field: "name",
              render: (rowData: IVisit) => (
                <div className={classes.rowDataColumn}>
                  <Avatar
                    className={classes.avatar}
                    key={rowData.id}
                    alt={rowData.client.name}
                    src={rowData.client.image}
                  />
                  <Link to={`/app/clients/${rowData.client.id}`}>
                    <Typography variant="body1">{rowData.client.name}</Typography>
                  </Link>
                </div>
              ),
            },
            {
              title: "Reason",
              field: "reason",
              render: (rowData: IVisit) => (
                <Typography variant="body1">{rowData.reason}</Typography>
              ),
            },
            {
              title: "Description",
              field: "description",
              width: 500,
              render: (rowData: IVisit) => (
                <Typography variant="body1">{rowData.description.slice(0,80)}</Typography>
              ),
            },
            {
                title: "Date",
                field: "date",
                render: (rowData: IVisit) => (
                  <Typography variant="body1">
                    {dayjs(rowData.date).format("DD.MM.YYYY")}
                  </Typography>
                ),
              },
            {
              title: "Last Updated",
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
              width: 85,
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
          icons={tableIcons}
        />
      </PerfectScrollbar>
    </Card>
  );
};

export default Results;
