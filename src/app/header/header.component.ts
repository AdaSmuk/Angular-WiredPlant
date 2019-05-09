import { Component, OnInit, HostBinding } from '@angular/core';
import { AlertsControlService } from '../Core/Services/alerts-control.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.view.html',
})
export class HeaderComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-header';

  public showAlert: boolean;
  constructor(private alertControl: AlertsControlService) { 
    this.showAlert = false;
    this.alertControl.showAlertTriangle.subscribe(value => {
      this.showAlert = value;
    })
  }

  ngOnInit() {
  }

  public hideAlert(): void {
    this.showAlert = false;
  }
}
