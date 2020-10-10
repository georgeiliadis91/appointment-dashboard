// Should Implement cookieStore for the JWTs.
// const api = new MyAPI({
// 	headers: {
// 		Authorization: cookieStore.get("token") || "",
// 	},
// });

import { API } from "../helpers/api";
import { IClient } from "../entities/client";

const getClients = async (): Promise<IClient[]> => {
  const api = new API();
  const response = await api.get("clients");
  return response;
};

const getClient = async (id: number): Promise<IClient> => {
  const api = new API();
  const response = await api.get(`clients/${id}`);
  return response;
};

export { getClients, getClient };
