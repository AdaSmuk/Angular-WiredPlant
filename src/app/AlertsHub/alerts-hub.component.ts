import { OnInit, HostBinding, Component } from "@angular/core";
import { AlertsControlService } from "../Core/Services/alerts-control.service";
import { PlantControlService } from "../Core/Services/plant-control.service";
import { Alert } from "../Core/Models/Alert";

@Component({
    selector: 'alerts-hub',
    templateUrl: './alerts-hub.view.html',
})
export class AlertsHubComponent implements OnInit {

    @HostBinding('class') styleClass = 'alerts-hub';

    public alerts: Alert[];

    constructor(private alertControl: AlertsControlService,
                private plantControl: PlantControlService) {
        this.alerts = [];
     }

    ngOnInit() {
        this.alertControl.getAlerts(this.plantControl.currentlyWired).subscribe(alerts => {
            console.log(alerts);
            alerts.forEach(alert => {
                const newAlert: Alert = new Alert();
                newAlert.deserialize(alert);
                this.alerts.push(newAlert);
            });
            console.log(this.alerts);
        });
    }

}