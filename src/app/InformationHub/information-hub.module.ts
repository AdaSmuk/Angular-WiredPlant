import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationHubComponent } from './information-hub.component';

@NgModule({
    declarations: [
       InformationHubComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [InformationHubComponent]
  })
  export class InformationHubModule { }
