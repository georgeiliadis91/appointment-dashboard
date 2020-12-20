import { useCallback, useEffect, useState } from "react";
import { useTriggerError } from "../redux/alert/hooks";
import {
  useTriggerLoadingOff,
  useTriggerLoadingOn,
} from "../redux/loading/hooks";

export const useFetchData = <T,>(
  fetchFunc: Promise<T[]>
): [T[], () => Promise<void>] => {
  const [data, setData] = useState<T[]>([]);

  const errorAlert = useTriggerError();
  const setLoadingON = useTriggerLoadingOn();
  const setLoadingOFF = useTriggerLoadingOff();

  const getData = useCallback(async () => {
    setLoadingON();
    try {
      const response = await fetchFunc;
      setData(response);
      setLoadingOFF();
    } catch (error) {
      errorAlert(error.message);
    }
    // eslint-disable-next-line
  }, [errorAlert, setLoadingON, setLoadingOFF]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return [data, getData];
};
