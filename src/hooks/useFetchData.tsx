import { useEffect, useState } from "react";
import { useTriggerError } from "../redux/alert/hooks";
import { useTriggerLoadingOn,useTriggerLoadingOff} from "../redux/loading/hooks";


// FETCH DATA HOOK 

const useFetchData = <T,>(
  fetchFunc: Promise<T[]>
): [T[], () => Promise<void>] => {
  const [data, setData] = useState<T[]>([]);
  const errorAlert = useTriggerError();
  const setLoadingON = useTriggerLoadingOn();
  const setLoadingOFF = useTriggerLoadingOff();


  const getData = async () => {
    setLoadingON();
    
    try {
      const response = await fetchFunc;
      setData(response);
      setLoadingOFF();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, getData];
};

export { useFetchData };
