import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @HostBinding('class') styleClass = 'navbar';

  constructor() { }

  ngOnInit() {
  }

}
