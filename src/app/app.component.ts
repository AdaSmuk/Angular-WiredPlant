import { Component } from '@angular/core';
import { PlantControlService } from './Core/Services/plant-control.service';
import { ArtificialLightControlService } from './Core/Services/artificial-light-control.service';
import { LogsControlService } from './Core/Services/logs-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WiredPlant';

  constructor(private plantControl: PlantControlService) {
    this.plantControl.getAllPlants();
  }
}
