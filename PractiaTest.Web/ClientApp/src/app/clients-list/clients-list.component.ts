import {Component, OnInit} from '@angular/core';
import {Client} from "../interfaces/client";
import {ApiService} from "../services/apiservice.service";
import {ResultCode} from "../interfaces/results";

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public clients: Client[] = [];
  public connectionStatus: string = "Loading...";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClients().subscribe({
      next: response => {

        if(response.resultCode == ResultCode.Ok)
        {
            if(response.data.length > 0)
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

        this.clients = response.data;
      },
      error: err => this.connectionStatus = "ERROR: " + err
    });
  }


}
