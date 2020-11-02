import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import Toolbar from "./Toolbar";
import { getClients } from "../../services/clientApi";
import { IClient } from "../../entities/client";

import { AddClient } from "./components/addClient";
import { triggerError } from "../../redux/alert/actions";
import { useDispatch } from "react-redux";
import { AddIcon } from "../../components/ui-kit/icons/icons";
import { useStyles } from "./clients.style";
import { Container } from "../../components/ui-kit/container/container";
import { Typography } from "../../components/ui-kit/typography/typography";
import { Fab } from "../../components/ui-kit/fab/fab";
import { Tooltip } from "../../components/ui-kit/tooltip/tooltip";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { Paper } from "../../components/ui-kit/paper/paper";

const Clients = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [clients, setClients] = useState<IClient[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const refreshData = async () => {
    try {
      const clientData = await getClients();
      setClients(clientData);
      setLoading(false);
    } catch (error) {
      dispatch(triggerError(error));
    }
  };

  useEffect(() => {
    try {
      refreshData();
    } catch (error) {
      dispatch(triggerError(error));
    }
  }, []);

  return (
    <Container maxWidth={false}>
      <div>
        <Typography variant="body1">Add new client</Typography>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <Paper>
        {loading ? <CircularProgress /> : <Results clients={clients} />}
      </Paper>
    </Container>
  );
};

export default Clients;
