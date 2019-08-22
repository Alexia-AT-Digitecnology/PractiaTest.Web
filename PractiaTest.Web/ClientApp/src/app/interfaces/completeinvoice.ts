import {InvoiceDetail} from "./invoicedetail";

export interface CompleteInvoice
{
  id: number;
  clientId: number;
  clientName: string;
  issueDate: string;
  paid: boolean;
  total: number;
  invoiceDetails: InvoiceDetail[];
}
