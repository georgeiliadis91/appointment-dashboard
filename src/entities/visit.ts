export interface IVisit {
  id: number;
  client: number;
  description: string;
  date: Date;
  reason: string;
  charge: number;
  files?: string;
  created_at: Date;
  updated_at: Date;
}
