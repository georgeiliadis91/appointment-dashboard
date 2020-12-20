import { useState } from "react";
import { useTriggerError } from "../redux/alert/hooks";
import {
  useTriggerLoadingOff,
  useTriggerLoadingOn,
} from "../redux/loading/hooks";

const useFetchPaginatedData = <T,>(
  fetchFunc: (page?: number, limit?: number) => Promise<T>
): [T | undefined, (newPage: number, newLimit: number) => void] => {
  const errorAlert = useTriggerError();
  const setLoadingON = useTriggerLoadingOn();
  const setLoadingOFF = useTriggerLoadingOff();

  const [data, setData] = useState<T | undefined>();

  const getData = async (page?: number, limit?: number) => {
    setLoadingON();
    try {
      const response = await fetchFunc(page, limit);
      setData(response);
      setLoadingOFF();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  return [data, (page?: number, limit?: number) => getData(page, limit)];
};

export { useFetchPaginatedData };
