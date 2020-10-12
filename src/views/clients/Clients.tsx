import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Results from "./components/Results";
import Toolbar from "./Toolbar";
import { getClients } from "../../services/clientApi";
import { IClient } from "../../entities/client";
import { AlertHandler } from "../../components/alerthandler/AlertHandler";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography/Typography";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from "@material-ui/icons/Add";
import { AddClient } from "./components/addClient";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Clients = () => {
  const classes = useStyles();
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
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    try {
      refreshData();
    } catch (error) {
      setErrorMessage(error);
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
      <Box mt={3}>
        {loading ? <CircularProgress /> : <Results clients={clients} />}
      </Box>
      <AlertHandler
        severity="error"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <AddClient
        handleClose={handleClose}
        open={open}
        setErrorMessage={setErrorMessage}
      />
    </Container>
  );
};

export default Clients;
