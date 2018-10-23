import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HeaderComponent } from './Header/header.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { AddNewPlantModule } from './AddNewPlant/add-new-plant.module';
import { MainHubModule } from './MainHub/main-hub.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BsDropdownModule.forRoot(), AddNewPlantModule, MainHubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
