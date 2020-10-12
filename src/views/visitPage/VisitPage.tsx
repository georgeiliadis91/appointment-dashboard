import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertHandler } from "../../components/alerthandler/AlertHandler";
import { IVisit } from "../../entities/visit";
import { getVisit } from "../../services/visitApi";

interface Props {}

export const VisitPage = (props: Props) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [visitData, setVisitData] = useState<IVisit>();

  useEffect(() => {
    const fetchData = async () => {
      const client = await getVisit(parseInt(id));
      setVisitData(client);
    };

    try {
      fetchData();
      setLoading(false);
    } catch (error) {
      setErrorMessage(error);
    }
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <div>
        Visit Page - {id}
        <ul>
          <li>{visitData?.id}</li>
          <li>{visitData?.client.name}</li>
          <li>{visitData?.description}</li>
          <li>{visitData?.date}</li>
          <li>{visitData?.charge}</li>
          <li>{visitData?.updated_at}</li>
        </ul>
        <AlertHandler
          severity="error"
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    );
  }
};
