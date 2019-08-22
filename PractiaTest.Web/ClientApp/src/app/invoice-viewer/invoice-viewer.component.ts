import { Component, OnInit } from '@angular/core';
import {CompleteInvoice} from "../interfaces/completeinvoice";
import {ApiService} from "../services/apiservice.service";
import {ResultCode} from "../interfaces/results";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'invoice-viewer',
  templateUrl: './invoice-viewer.component.html',
  styleUrls: ['./invoice-viewer.component.css']
})
export class InvoiceViewerComponent implements OnInit {

  public invoice: CompleteInvoice;
  public connectionStatus: string = "Loading...";

  constructor(private route: ActivatedRoute,
              private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');

    if(!param)
    {
      this.connectionStatus = "Invalid ID parameter.";
      return;
    }

    const id = +param;

    this.apiService.getCompleteInvoiceById(id).subscribe({
      next: response => {

        if(response.resultCode == ResultCode.Ok)
        {
          if(response.data)
          {
            this.connectionStatus = "Done.";
          }
          else
          {
            this.connectionStatus = "Record does not exist.";
          }
        }
        else
        {
          this.connectionStatus = "ERROR: " + response.errorMessage;
        }

        this.invoice = response.data;
      },
      error: err => this.connectionStatus = "ERROR: " + err
    });
  }

  onBack(): void
  {
    if(this.invoice)
    {
      this.router.navigate(["/client-viewer/" + this.invoice.clientId]);
    }
    else
    {
      this.router.navigate(["/clients-list"]);
    }
  }
}
