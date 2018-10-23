import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.view.html'
})
export class NavbarComponent implements OnInit {

  @HostBinding('class') styleClass = 'navbar';

  constructor() { }

  ngOnInit() {
  }

}
