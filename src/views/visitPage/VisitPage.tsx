import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IVisit } from "../../entities/visit";
import { triggerError } from "../../redux/alert/actions";
import { getVisit } from "../../services/visitApi";

interface Props {}

export const VisitPage = (props: Props) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [visitData, setVisitData] = useState<IVisit>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const client = await getVisit(parseInt(id));
      setVisitData(client);
    };

    try {
      fetchData();
      setLoading(false);
    } catch (error) {
      dispatch(triggerError(error));
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
      </div>
    );
  }
};
