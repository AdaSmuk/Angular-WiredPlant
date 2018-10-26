import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-hub-buttons',
  templateUrl: './main-hub-buttons.view.html'
})
export class MainHubButtonsComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-buttons';

  constructor() {}

  ngOnInit() {
  }
}
