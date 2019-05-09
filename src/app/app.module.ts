import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BsDropdownModule.forRoot(), AddNewPlantModule, MainHubModule, ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNewPlantComponent]
})
export class AppModule { }
