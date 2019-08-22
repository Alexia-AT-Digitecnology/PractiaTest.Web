import { Component, OnInit } from '@angular/core';
import {CompleteClient} from "../interfaces/completeclient";
import {ResultCode} from "../interfaces/results";
import {ApiService} from "../services/apiservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'client-viewer',
  templateUrl: './client-viewer.component.html',
  styleUrls: ['./client-viewer.component.css']
})
export class ClientViewerComponent implements OnInit {

  public client: CompleteClient = null;
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

    this.apiService.getCompleteClientById(id).subscribe({
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

        this.client = response.data;
      },
      error: err => this.connectionStatus = "ERROR: " + err
    });
  }

  onBack(): void
  {
    this.router.navigate(['/clients-list']);
  }

}
