import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsHubComponent } from './graphs-hub.component';



@NgModule({
    declarations: [
       GraphsHubComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [GraphsHubComponent]
  })
  export class GraphsHubModule { }
