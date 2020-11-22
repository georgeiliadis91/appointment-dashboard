import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import { getClients } from "../../services/clientApi";
import { IClient } from "../../entities/client";

import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { useTriggerError } from "../../redux/alert/hooks";
import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay";

import { useStyles } from "./clients.style";
import { useFetchData } from "../../hooks/useFetchData";

export const Clients = () => {
  const classes = useStyles();
  // const [clients, setClients] = useState<IClient[]>([]);
  // const [loading, setLoading] = useState(true);

  const [clients, setClients] = useFetchData(getClients());




  return (
    <MainDataDisplay addBtnTitle="Add Client"> 
        {/* {loading ? <CircularProgress /> : }
         */}
         <Results clients={clients} />
    </MainDataDisplay>
    
  );
};

