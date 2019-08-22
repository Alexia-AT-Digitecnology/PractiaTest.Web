import {Client} from "./client";
import {CompleteClient} from "./completeclient";
import {CompleteInvoice} from "./completeinvoice";

export enum ResultCode
{
  Ok = 0,
  BadRequest = 400,
  InternalError = 500
}

export interface GetAllClientsResult
{
  errorMessage : string;
  resultCode: ResultCode;
  data: Client[];
}

export interface GetCompleteClientByIdResult
{
  errorMessage : string;
  resultCode: ResultCode;
  data: CompleteClient;
}

export interface GetCompleteInvoiceByIdResult
{
  errorMessage : string;
  resultCode: ResultCode;
  data: CompleteInvoice;
}


