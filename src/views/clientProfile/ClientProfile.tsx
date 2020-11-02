import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IClient } from "../../entities/client";
import { getClient } from "../../services/clientApi";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Results from "./components/Results";
import Box from "@material-ui/core/Box/Box";
import { triggerError } from "../../redux/alert/actions";
import { useDispatch } from "react-redux";

interface Props {}

export const ClientProfile = (props: Props) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
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
      dispatch(triggerError(error));
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
    </div>
  );
};
