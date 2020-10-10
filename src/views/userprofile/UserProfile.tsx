import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IClient } from "../../entities/client";
import { getClient } from "../../services/clientApi";
import { AlertHandler } from "../../components/alerthandler/AlertHandler";

interface Props {}

export const UserProfile = (props: Props) => {
  let { id } = useParams();

  const [errorMessage, setErrorMessage] = useState("");
  const [clientData, setClientData] = useState<IClient>();

  useEffect(() => {
    const fetchData = async () => {
      const client = await getClient(parseInt(id));
      console.log("the data", client);
      setClientData(client);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
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
      <AlertHandler
        severity="error"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};
