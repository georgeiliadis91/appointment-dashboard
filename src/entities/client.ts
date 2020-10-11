import { IVisit } from "./visit";

export interface IClient {
  id: number;
  name: string;
  phone: number;
  email: string;
  image: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  visits: IVisit[];
}
