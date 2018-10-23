import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-new-plant',
  templateUrl: './add-new-plant.view.html',
})
export class AddNewPlantComponent implements OnInit {

  @HostBinding('class') styleClass = 'add-new-plant';

  private newPlantForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
