import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsHubComponent } from './alerts-hub.component';

@NgModule({
    declarations: [
       AlertsHubComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [AlertsHubComponent]
  })
  export class AlertsHubModule { }
