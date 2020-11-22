import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import { getClients } from "../../services/clientApi";

import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay";

import { useStyles } from "./clients.style";
import { useFetchData } from "../../hooks/useFetchData";

export const Clients = () => {
  const classes = useStyles();
  

  const [clients, setClients] = useFetchData(getClients());
  
  return (
    <MainDataDisplay addBtnTitle="Add Client"> 
        {/* {loading ? <CircularProgress /> : }
         */}
         <Results clients={clients} />
    </MainDataDisplay>
    
  );
};

