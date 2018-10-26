import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-hub-alert',
  templateUrl: './main-hub-alert.view.html'
})
export class MainHubAlertComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-alert';

  constructor() {}

  ngOnInit() {
  }
}
