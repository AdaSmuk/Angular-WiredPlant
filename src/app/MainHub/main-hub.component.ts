import { Component, OnInit, HostBinding } from '@angular/core';
import { PlantControlService } from '../Core/Services/plant-control.service';

@Component({
  selector: 'main-hub',
  templateUrl: './main-hub.view.html',
})
export class MainHubComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub';

  constructor(public plantControl: PlantControlService) { }

  ngOnInit() {
  }

}
