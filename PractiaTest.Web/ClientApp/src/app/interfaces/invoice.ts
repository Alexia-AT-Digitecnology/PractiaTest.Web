export interface Invoice
{
  id: number;
  clientId: number;
  issueDate: string;
  paid: boolean;
  total: number;
}
