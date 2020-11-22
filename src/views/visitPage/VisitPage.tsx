import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { IVisit } from "../../entities/visit";
import { useTriggerError } from "../../redux/alert/hooks";
import { getVisit } from "../../services/visitApi";

interface Props {}


// TODO update this one with a hook

export const VisitPage = (props: Props) => {
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

  if (loading) {
    return <CircularProgress />;
  } 
  
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
      </div>
    );
  
};
