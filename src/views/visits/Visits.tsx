import React from "react";

import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay/MainDataDisplay";
import Results from "./components/Results";
import { getVisits } from "../../services/visitApi";
import { useStyles } from "./visits.style";
import { useFetchData } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";

export const Visits = () => {
  const classes = useStyles();
  const [visits] = useFetchData(getVisits());
  const {loading} = useSelector((state:AppState)=>state.loading)

  return (
    <MainDataDisplay addBtnTitle="Add Visit"> 
      {loading ? <CircularProgress /> :
        <Results visits={visits} />
      }
    </MainDataDisplay>
    
  );
};

