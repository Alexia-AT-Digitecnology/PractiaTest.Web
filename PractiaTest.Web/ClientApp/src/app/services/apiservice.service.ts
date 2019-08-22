import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {
  GetAllClientsResult,
  GetCompleteClientByIdResult,
  GetCompleteInvoiceByIdResult
} from "../interfaces/results";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getClients() : Observable<GetAllClientsResult>
  {
    return this.http.get<GetAllClientsResult>("http://localhost:5000/api/Clients/GetAll")
      .pipe(
        tap(data => console.log('GET Response: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCompleteClientById(clientId : number) : Observable<GetCompleteClientByIdResult>
  {
    return this.http.get<GetCompleteClientByIdResult>("http://localhost:5000/api/Clients/GetCompleteById?clientId=" + clientId)
      .pipe(
        tap(data => console.log('GET Response: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCompleteInvoiceById(invoiceId : number) : Observable<GetCompleteInvoiceByIdResult>
  {
    return this.http.get<GetCompleteInvoiceByIdResult>("http://localhost:5000/api/Invoices/GetCompleteById?invoiceId=" + invoiceId)
      .pipe(
        tap(data => console.log('GET Response: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
