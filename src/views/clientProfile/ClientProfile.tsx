import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IClient } from "../../entities/client";
import { getClient } from "../../services/clientApi";
import Results from "./components/Results";
import { triggerError } from "../../redux/alert/actions";
import { useDispatch } from "react-redux";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { Paper } from "../../components/ui-kit/paper/paper";
import { useTriggerError } from "../../redux/alert/hooks";

interface Props {}

export const ClientProfile = (props: Props) => {
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
      <Paper>
        {loading ? (
          <CircularProgress />
        ) : clientData ? (
          <Results visits={clientData.visits} />
        ) : null}
      </Paper>
    </div>
  );
};
