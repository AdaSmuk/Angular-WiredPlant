import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHubComponent } from './main-hub.component';
import { MainHubAlertComponent } from './MainHubAlertComponent/main-hub-alert.component';
import { MainHubGraphComponent } from './MainHubGraphComponent/main-hub-graph.component';
import { MainHubButtonsComponent } from './MainHubButtonsControler/main-hub-buttons.component';

@NgModule({
    declarations: [
        MainHubComponent, MainHubAlertComponent, MainHubGraphComponent, MainHubButtonsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [MainHubComponent, MainHubAlertComponent, MainHubGraphComponent, MainHubButtonsComponent]
  })
  export class MainHubModule { }
