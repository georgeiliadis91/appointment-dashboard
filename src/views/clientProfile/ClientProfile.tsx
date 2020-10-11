import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IClient } from "../../entities/client";
import { getClient } from "../../services/clientApi";
import { AlertHandler } from "../../components/alerthandler/AlertHandler";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Results from "./components/Results";
import Box from "@material-ui/core/Box/Box";

interface Props {}

export const ClientProfile = (props: Props) => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientData, setClientData] = useState<IClient>();

  useEffect(() => {
    const fetchData = async () => {
      const client = await getClient(parseInt(id));
      setClientData(client);
    };

    try {
      fetchData();
      setLoading(false);
    } catch (error) {
      setErrorMessage(error);
    }
  }, []);

  return (
    <div>
      Profile page- {id}{" "}
      <ul>
        <li>{clientData?.id}</li>
        <li>{clientData?.name}</li>
        <li>{clientData?.email}</li>
        <li>{clientData?.image}</li>
        <li>{clientData?.address}</li>
        <li>{clientData?.created_at}</li>
        <li>{clientData?.phone}</li>
      </ul>
      <Box mt={3}>
        {loading ? (
          <CircularProgress />
        ) : (
          clientData && <Results visits={clientData.visits} />
        )}
      </Box>
      <AlertHandler
        severity="error"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <AlertHandler
        severity="error"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};
