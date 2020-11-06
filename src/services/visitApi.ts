// Should Implement cookieStore for the JWTs.
// const api = new MyAPI({
// 	headers: {
// 		Authorization: cookieStore.get("token") || "",
// 	},
// });

import { MyAPI as api } from "../helpers/api";
import { IVisit } from "../entities/visit";

const getVisits = async (): Promise<IVisit[]> => {
  const response = await api.get("visits");
  return response;
};

const getVisit = async (id: number): Promise<IVisit> => {
  const response = await api.get(`visits/${id}`);
  return response;
};

export { getVisits, getVisit };
