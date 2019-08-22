export interface Client
{
  id: number;
  name: string;
  address: string;
  bornDate: string;
  phoneNumber: string;
  email: string;
  invoices: number[];
  has10PercentDiscount: number;
}
