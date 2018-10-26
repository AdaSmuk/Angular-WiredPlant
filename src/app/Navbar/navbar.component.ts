import { Component, OnInit, HostBinding } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewPlantComponent } from '../AddNewPlant/add-new-plant.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.view.html'
})
export class NavbarComponent implements OnInit {

  @HostBinding('class') styleClass = 'navbar';

  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

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
