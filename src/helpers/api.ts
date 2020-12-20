import axios from "axios";
import { LocalStore } from "./storage";

interface IApiConfig {
  baseURL?: string;
  headers?: {
    Authorization?: string;
  };
}
class API {
  constructor(private config: IApiConfig = {}) {
    this.config.baseURL = this.config.baseURL || process.env.REACT_APP_API_URL;
  }

  public async get(url: string): Promise<any> {
    const response = await axios.get(url, this.config);
    return response.data;
  }
  public async post(url: string, data: any = {}): Promise<any> {
    const response = await axios.post(url, data, this.config);
    return response.data;
  }

  public async patch(url: string, data: any = {}): Promise<any> {
    const response = await axios.put(url, data, this.config);

    return response.data;
  }

  public async put(url: string, data: any = {}): Promise<any> {
    const response = await axios.put(url, data, this.config);
    return response.data;
  }

  public async delete(url: string, data: any = {}): Promise<any> {
    const response = await axios.delete(url, {
      ...this.config,
      data: { ...data },
    });
    return response.data;
  }
}

export { API };
