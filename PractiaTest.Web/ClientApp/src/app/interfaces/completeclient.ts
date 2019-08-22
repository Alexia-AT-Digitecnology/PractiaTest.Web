import {Invoice} from "./invoice";

export interface CompleteClient
{
  id: number;
  name: string;
  address: string;
  bornDate: string;
  phoneNumber: string;
  email: string;
  invoices: Invoice[];
  has10PercentDiscount: number;
}
