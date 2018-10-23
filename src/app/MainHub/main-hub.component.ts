import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-hub',
  templateUrl: './main-hub.view.html',
})
export class MainHubComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub';

  constructor() { }

  ngOnInit() {
  }

}
