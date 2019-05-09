import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PlantControlService } from '../Core/Services/plant-control.service';
import { Plant } from '../Core/Models/Plant';

@Component({
  selector: 'add-new-plant',
  templateUrl: './add-new-plant.view.html'
})
export class AddNewPlantComponent implements OnInit {

  @HostBinding('class') styleClass = 'add-new-plant';

  public newPlantForm: FormGroup;
  public title: string;
  public closeBtnName: string;

  constructor(private formBuilder: FormBuilder,
              public bsModalRef: BsModalRef,
              private plantControl: PlantControlService) { }

  ngOnInit() {
    this.newPlantForm = this.formBuilder.group({
      plantFamily: ['', [
        Validators.required
      ]],
      plantSpecies: ['', [
        Validators.required
      ]],
      plantName: ['', [
        Validators.required
      ]],
    });
  }

  public submitNewPlant(): void {
    const newPlant: Plant = new Plant();
    newPlant.family = this.newPlantForm.controls["plantFamily"].value;
    newPlant.species = this.newPlantForm.controls["plantSpecies"].value;
    newPlant.name = this.newPlantForm.controls["plantName"].value;
    this.plantControl.createPlant(newPlant).subscribe( observer => {
      this.bsModalRef.hide();
    });
    
  }

}
