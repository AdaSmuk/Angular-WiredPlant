import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHubComponent } from './main-hub.component';

@NgModule({
    declarations: [
        MainHubComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [MainHubComponent]
  })
  export class MainHubModule { }
