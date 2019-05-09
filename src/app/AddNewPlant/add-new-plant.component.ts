import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'add-new-plant',
  templateUrl: './add-new-plant.view.html',
})
export class AddNewPlantComponent implements OnInit {

  @HostBinding('class') styleClass = 'add-new-plant';

  private newPlantForm: FormGroup;
  private title: string;
  private closeBtnName: string;

  constructor(private formBuilder: FormBuilder,
              public bsModalRef: BsModalRef) { }

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
