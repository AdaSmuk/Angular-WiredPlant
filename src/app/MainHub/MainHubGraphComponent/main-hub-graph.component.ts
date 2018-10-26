import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-hub-graph',
  templateUrl: './main-hub-graph.view.html'
})
export class MainHubGraphComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-graph';

  constructor() {}

  ngOnInit() {
  }
}
