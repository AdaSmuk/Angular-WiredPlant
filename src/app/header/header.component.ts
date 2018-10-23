import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.view.html',
})
export class HeaderComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-header';

  constructor() { }

  ngOnInit() {
  }

}
