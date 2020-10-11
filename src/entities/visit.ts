import { IClient } from "./client";

export interface IVisit {
  id: number;
  client: IClient;
  description: string;
  date: Date;
  reason: string;
  charge: number;
  files?: string;
  created_at: Date;
  updated_at: Date;
}
