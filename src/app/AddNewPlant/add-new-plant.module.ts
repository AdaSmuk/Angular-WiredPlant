import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddNewPlantComponent } from './add-new-plant.component';

@NgModule({
    declarations: [
        AddNewPlantComponent
    ],
    imports: [
        CommonModule, ReactiveFormsModule,
    ],
    providers: [],
    exports: [AddNewPlantComponent]
  })
  export class AddNewPlantModule { }
