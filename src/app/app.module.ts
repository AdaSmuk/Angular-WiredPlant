import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderComponent } from './Header/header.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { AddNewPlantModule } from './AddNewPlant/add-new-plant.module';
import { MainHubModule } from './MainHub/main-hub.module';
import { AddNewPlantComponent } from './AddNewPlant/add-new-plant.component';
import { InformationHubModule } from './InformationHub/information-hub.module';
import { AlertsHubModule } from './AlertsHub/alerts-hub.module';
import { GraphsHubModule } from './GraphsHub/graph-hub.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, BsDropdownModule.forRoot(), AddNewPlantModule, MainHubModule, InformationHubModule, AlertsHubModule, GraphsHubModule, ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNewPlantComponent]
})
export class AppModule { }
