import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Results from "./Results";
import Toolbar from "./Toolbar";
import { getClients } from "../../services/clientApi";
import { IClient } from "../../entities/client";
import { AlertHandler } from "../../components/alerthandler/AlertHandler";
import CircularProgress from "@material-ui/core/CircularProgress";

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

  useEffect(() => {
    const fetchData = async () => {
      const clientData = await getClients();
      console.log("the data", clientData);
      setClients(clientData);
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }, []);

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        {loading ? <CircularProgress /> : <Results clients={clients} />}
      </Box>
      <AlertHandler
        severity="error"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </Container>
  );
};

export default Clients;
