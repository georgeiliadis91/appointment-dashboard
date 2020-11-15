import React, { useState, useEffect } from "react";

import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { useTriggerError } from "../../redux/alert/hooks";
import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay";
import Results from "./components/Results";
import { IVisit } from "../../entities/visit";
import { getVisits } from "../../services/visitApi";

import { useStyles } from "./visits.style";

export const Visits = () => {
  const classes = useStyles();
  const errorAlert = useTriggerError();
  const [visits, setVisits] = useState<IVisit[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const refreshData = async () => {
      try {
        const visitData = await getVisits();
        setVisits(visitData);
        setLoading(false);
      } catch (error) {
        errorAlert(error);
      }
    };

    try {
      refreshData();
    } catch (error) {
      errorAlert(error);
    }
  }, [errorAlert]);

  return (
    <MainDataDisplay addBtnTitle="Add Visit"> 
        {loading ? <CircularProgress /> : <Results visits={visits} />}
    </MainDataDisplay>
    
  );
};

