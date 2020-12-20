import { API } from "../helpers/api";
import { IClient } from "../entities/client";
import { LocalStore } from "../helpers/storage";

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
  const api = new API({
    headers: {
      Authorization: LocalStore.get("token")
        ? `Bearer ${LocalStore.get("token")}`
        : "",
    },
  });
  const response = await api.get("clients");
  return response;
};

const addClient = async (data: IPostData): Promise<IClient[]> => {
  const api = new API({
    headers: {
      Authorization: LocalStore.get("token")
        ? `Bearer ${LocalStore.get("token")}`
        : "",
    },
  });
  const response = await api.post("clients", data);
  return response;
};

const getClient = async (id: number): Promise<IClient> => {
  const api = new API({
    headers: {
      Authorization: LocalStore.get("token")
        ? `Bearer ${LocalStore.get("token")}`
        : "",
    },
  });
  const response = await api.get(`clients/${id}`);
  return response;
};

export { getClients, getClient, addClient };
