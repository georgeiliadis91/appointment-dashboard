import axios from "axios";

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
    try {
      const response = await axios.get(url, this.config);
      return response.data;
    } catch (err) {
      console.log("Api error", err);
      // return handleError(err);
    }
  }
  public async post(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.post(url, data, this.config);
      return response.data;
    } catch (err) {
      console.log("Api error", err);
      // return handleError(err);
    }
  }

  public async patch(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.put(url, data, this.config);

      console.log(response);
      return response.data;
    } catch (err) {
      console.log("Api error", err);
      // return handleError(err);
    }
  }

  public async put(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data;
    } catch (err) {
      console.log("Api error", err);
      // return handleError(err);
    }
  }

  public async delete(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.delete(url, {
        ...this.config,
        data: { ...data },
      });
      return response.data;
    } catch (err) {
      console.log("Api error", err);
      // return handleError(err);
    }
  }
}

const MyAPI = new API();

export { MyAPI };
