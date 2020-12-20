import React from "react";
import Results from "./components/Results";
import { getClients } from "../../services/clientApi";
import { MainDataDisplay } from "../../components/helper-components/MainDataDisplay/MainDataDisplay";
import { useStyles } from "./clients.style";
import { useFetchData } from "../../hooks/useFetchData";
import { CircularProgress } from "../../components/ui-kit/circular-progress/circulartprogress";
import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const Clients = () => {
  const classes = useStyles();

  const { loading } = useSelector((state: AppState) => state.loading);
  const [clients] = useFetchData(getClients());

  return (
    <MainDataDisplay addBtnTitle="Add Client">
      {loading ? <CircularProgress /> : <Results clients={clients} />}
    </MainDataDisplay>
  );
};
