import { MyAPI as api } from "../helpers/api";
import { IClient } from "../entities/client";

// Should Implement cookieStore for the JWTs.
// const api = new MyAPI({
// 	headers: {
// 		Authorization: cookieStore.get("token") || "",
// 	},
// });

interface IPostData {
  name: string;
  phone: number;
  email: string;
  address: string;
}

const getClients = async (): Promise<IClient[]> => {
  const response = await api.get("clients");
  return response;
};

const addClient = async (data: IPostData): Promise<IClient[]> => {
  const response = await api.post("clients", data);
  return response;
};

const getClient = async (id: number): Promise<IClient> => {
  const response = await api.get(`clients/${id}`);
  return response;
};

export { getClients, getClient, addClient };
