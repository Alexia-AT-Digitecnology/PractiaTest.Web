import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientViewerComponent } from './client-viewer/client-viewer.component';
import { InvoiceViewerComponent } from './invoice-viewer/invoice-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ClientsListComponent,
    ClientViewerComponent,
    InvoiceViewerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'clients-list', component: ClientsListComponent },
      { path: 'client-viewer/:id', component: ClientViewerComponent },
      { path: 'invoice-viewer/:id', component: InvoiceViewerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
