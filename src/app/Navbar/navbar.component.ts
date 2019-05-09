import { Component, OnInit, HostBinding } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewPlantComponent } from '../AddNewPlant/add-new-plant.component';
import { PlantControlService } from '../Core/Services/plant-control.service';
import { Plant } from '../Core/Models/Plant';
import { RewireRequest } from '../Core/Models/Requests';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.view.html'
})
export class NavbarComponent implements OnInit {

  @HostBinding('class') styleClass = 'navbar';

  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService,
              public plantControl: PlantControlService) {
    this.modalService.onHide.subscribe( observer => {
      this.plantControl.getAllPlants();
    })
  }

  ngOnInit() {
  }

  public openAddNewPlantModal() {
    const initialState = {
      list: [],
      title: 'Add new plant'
    };
    this.bsModalRef = this.modalService.show(AddNewPlantComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';    
  }

}
