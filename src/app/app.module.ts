import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
