import React, { useState, useEffect } from "react";

import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { useTriggerError } from "../../redux/alert/hooks";
import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay";
import Results from "./components/Results";
import { IVisit } from "../../entities/visit";
import { getVisits } from "../../services/visitApi";

import { useStyles } from "./visits.style";
import { useFetchData } from "../../hooks/useFetchData";

export const Visits = () => {
  const classes = useStyles();
  const errorAlert = useTriggerError();
  const [visits, setVisits] = useFetchData(getVisits());
  // const [loading, setLoading] = useState(true);



  return (
    <MainDataDisplay addBtnTitle="Add Visit"> 
        {/* {loading ? <CircularProgress /> :} */}
        <Results visits={visits} />
    </MainDataDisplay>
    
  );
};

