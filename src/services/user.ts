import { MyAPI as api } from "../helpers/api";

const signInUser = async (identifier:string, password:string): Promise<any> => {
  const response = await api.post("auth/local",{
    identifier,
    password
  });
  return response;
};

const signOutUser = async (data: any): Promise<any> => {
  const response = await api.post("clients", data);
  return response;
};

const checkToken = async (): Promise<any> => {
  const response = await api.get(`users/me`);
  return response;
};

export { signInUser, signOutUser, checkToken };
