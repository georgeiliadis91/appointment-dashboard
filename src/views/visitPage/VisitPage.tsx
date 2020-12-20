import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dayjs } from "../../components/dayjs/dayjs";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { Paper } from "../../components/ui-kit/paper/paper";
import { Typography } from "../../components/ui-kit/typography/typography";
import { IVisit } from "../../entities/visit";
import { useTriggerError } from "../../redux/alert/hooks";
import { getVisit } from "../../services/visitApi";
import { useStyles } from "./visit-page.style";

interface Props {}

// TODO update this one with a hook

export const VisitPage = (props: Props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [visitData, setVisitData] = useState<IVisit>();

  // const [visitData, setVisitData] = useFetchData(getVisits());
  const errorAlert = useTriggerError();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = await getVisit(parseInt(id));
        setVisitData(client);
      } catch (error) {
        errorAlert(error);
      }
    };

    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !visitData) {
    return <CircularProgress />;
  }

  return (
    <Paper className={classes.root}>
      <Typography className={classes.visitId} variant="body1">
        visit id: {id}
      </Typography>
      <div className={classes.headerContainer}>
        <Typography className={classes.clientName} variant="h3">
          {visitData.client.name}
        </Typography>
        <Typography className={classes.chargesText} variant="body1">
          Charge: {visitData.charge} €
        </Typography>
      </div>
      <Typography className={classes.visitDate} variant="body2">
        Date: {dayjs(visitData.date).format("DD/MM/YYYY")}
      </Typography>
      <Typography variant="h4">Description:</Typography>
      <Typography className={classes.descriptionText}>
        {visitData.description}
      </Typography>
      <Typography className={classes.updateDate} variant="body2">
        Last updated at: {dayjs(visitData.created_at).format("DD/MM/YYYY")}
      </Typography>
    </Paper>
  );
};
