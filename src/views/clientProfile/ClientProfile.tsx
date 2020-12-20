import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IClient } from "../../entities/client";
import { getClient } from "../../services/clientApi";
import Results from "./components/Results";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { Paper } from "../../components/ui-kit/paper/paper";
import { useTriggerError } from "../../redux/alert/hooks";
import { Typography } from "@material-ui/core";
import { Grid } from "../../components/ui-kit/grid";
import { useStyles } from "./client-profile.style";

interface Props {}

export const ClientProfile = (props: Props) => {
  const classes = useStyles();
  const { id } = useParams();
  const errorAlert = useTriggerError();

  const [loading, setLoading] = useState(true);
  const [clientData, setClientData] = useState<IClient | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = await getClient(parseInt(id));
        setClientData(client);
        setLoading(false);
      } catch (error) {
        errorAlert(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading || !clientData) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Typography className={classes.profileUserId} variant="body2">
          {" "}
          User id: {id}
        </Typography>
        <img
          className={classes.userProfilePicture}
          src={clientData.image}
          alt={clientData.name}
        />
        <Grid className={classes.profileDataContainer} container spacing={3}>
          <Grid item xs={4}>
            <Typography className={classes.profileText} variant="body1">
              Name: {clientData.name}
            </Typography>
            <Typography className={classes.profileText} variant="body1">
              Email: {clientData.email}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.profileText} variant="body1">
              Address: {clientData.address}
            </Typography>
            <Typography className={classes.profileText} variant="body1">
              Phone: {clientData.phone}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.profileText} variant="body1">
              Created at: {clientData.created_at}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper>
        {" "}
        <Results visits={clientData.visits} />
      </Paper>
    </div>
  );
};
