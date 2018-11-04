import { Component, OnInit, HostBinding } from '@angular/core';

export enum ToogleEnum {
  ON = 'ON',
  OFF = 'OFF'
}

@Component({
  selector: 'main-hub-buttons',
  templateUrl: './main-hub-buttons.view.html'
})
export class MainHubButtonsComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-buttons';

  public toggleLightButtonCaption: ToogleEnum;

  constructor() {}

  public toggleLightButton(): void {
    this.toggleLightButtonCaption = this.toggleLightButtonCaption === ToogleEnum.ON ? ToogleEnum.OFF : ToogleEnum.ON;
  }

  public getCurrentSensorData(): void {
    console.log('Cannot get data. Method not implemented');
  }

  public printPDF(): void {
    console.log('Cannot print PDF. Method not implemented');
  }

  ngOnInit() {
    this.toggleLightButtonCaption = ToogleEnum.OFF;
  }
}
