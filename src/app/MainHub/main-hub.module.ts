import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MainHubComponent } from './main-hub.component';
import { MainHubAlertComponent } from './MainHubAlertComponent/main-hub-alert.component';
import { MainHubGraphComponent } from './MainHubGraphComponent/main-hub-graph.component';
import { MainHubButtonsComponent } from './MainHubButtonsControler/main-hub-buttons.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
    declarations: [
        MainHubComponent, MainHubAlertComponent, MainHubGraphComponent, MainHubButtonsComponent
    ],
    imports: [
        CommonModule, HttpModule, FusionChartsModule
    ],
    providers: [],
    exports: [MainHubComponent, MainHubAlertComponent, MainHubGraphComponent, MainHubButtonsComponent]
  })
  export class MainHubModule { }
