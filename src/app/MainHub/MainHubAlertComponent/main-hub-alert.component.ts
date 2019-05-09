import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { AlertsControlService } from 'src/app/Core/Services/alerts-control.service';
import { PlantControlService } from 'src/app/Core/Services/plant-control.service';
import { LogsControlService } from 'src/app/Core/Services/logs-control.service';
import { ArtificialLightControlService } from 'src/app/Core/Services/artificial-light-control.service';
import { Alert, SunlightHeader, SunlightComment, TemperatureHeader, TemperatureComment, WaterHeader, WaterComment } from 'src/app/Core/Models/Alert';
import { AlertsRequest, LogsRequest } from 'src/app/Core/Models/Requests';
import { WateringLog } from 'src/app/Core/Models/Logs';

@Component({
  selector: 'main-hub-alert',
  templateUrl: './main-hub-alert.view.html'
})
export class MainHubAlertComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-alert';

  public date: Date;
  public freshBakedAlerts: Alert[];

  constructor(private alertControl: AlertsControlService,
    private plantControl: PlantControlService,
    private logControl: LogsControlService,
    private lightControl: ArtificialLightControlService) {
    this.date = new Date();
    this.freshBakedAlerts = [];
    this.plantControl.plantsReady.subscribe(value => {
      this.alertControl.getAlertDate(this.plantControl.currentlyWired);
    });
    this.alertControl.dateReady.subscribe(lastDate => {
      if (lastDate.getUTCDate() != this.date.getUTCDate() || lastDate.getUTCMonth() != this.date.getUTCMonth() || lastDate.getUTCFullYear() != this.date.getUTCFullYear()) {
        setTimeout(() => {
          this.generateNewLightAlerts();
          this.generateNewTemperatureAlerts();
          this.generateNewWateringAlerts()
        }, 1000)
      }
    })
  }

  ngOnInit() {

  }

  private generateNewLightAlerts(): void {
    if (!this.lightControl.light_status.artificial && (this.date.getUTCMonth() < 6 || this.date.getUTCMonth() > 8)) {
      const request: AlertsRequest = new AlertsRequest();
      request.alert = new Alert();
      request.alert.datetime = this.date;
      request.alert.header = SunlightHeader.redArtificial;
      request.alert.comment = SunlightComment.redArtificial;
      request.alert.serious = true;
      request.new_date = this.date;
      request.plant_id = this.plantControl.currentlyWired.plant_id;
      this.freshBakedAlerts.push(request.alert);
      this.alertControl.showAlertTriangle.next(true);
      this.alertControl.newAlert(request).subscribe();
    }
    if (true) {
      const logRequest: LogsRequest = new LogsRequest();
      logRequest.limit = 120;
      logRequest.plant_id = this.plantControl.currentlyWired.plant_id;
      this.logControl.fetchSunlightLogs(logRequest).subscribe(logs => {
        var counter = 0;
        var sum = 0;
        const values: number[] = logs.filter(log => log.value > 0).map(log => log.value);
        values.forEach(value => {
          sum += value;
          counter += 1;
        });
        if (sum / counter < 5000) {
          const request: AlertsRequest = new AlertsRequest();
          request.alert = new Alert();
          request.alert.datetime = this.date;
          request.alert.header = SunlightHeader.greyArtificial;
          request.alert.comment = SunlightComment.greyArtificial;
          request.alert.serious = false;
          request.new_date = this.date;
          request.plant_id = this.plantControl.currentlyWired.plant_id;
          this.freshBakedAlerts.push(request.alert);
          this.alertControl.newAlert(request).subscribe();
        }
      });
    }
  }

  private generateNewTemperatureAlerts(): void {
    if (this.date.getUTCMonth() < 3 || this.date.getUTCMonth() >= 11) {
      if (this.logControl.currentLogs.temperatureLog.value > 18) {
        const request: AlertsRequest = new AlertsRequest();
        request.alert = new Alert();
        request.alert.datetime = this.date;
        request.alert.header = TemperatureHeader.greyWinter;
        request.alert.comment = TemperatureComment.greyWinter;
        request.alert.serious = false;
        request.new_date = this.date;
        request.plant_id = this.plantControl.currentlyWired.plant_id;
        this.freshBakedAlerts.push(request.alert);
        this.alertControl.newAlert(request).subscribe();
      } else
        if (this.logControl.currentLogs.temperatureLog.value > 20) {
          const request: AlertsRequest = new AlertsRequest();
          request.alert = new Alert();
          request.alert.datetime = this.date;
          request.alert.header = TemperatureHeader.redWinter;
          request.alert.comment = TemperatureComment.redWinter;
          request.alert.serious = true;
          request.new_date = this.date;
          request.plant_id = this.plantControl.currentlyWired.plant_id;
          this.freshBakedAlerts.push(request.alert);
          this.alertControl.newAlert(request).subscribe();
        }

    } else if ((this.date.getUTCMonth() < 9 || this.date.getUTCMonth() > 5) && this.logControl.currentLogs.temperatureLog.value > 40) {
      const request: AlertsRequest = new AlertsRequest();
      request.alert = new Alert();
      request.alert.datetime = this.date;
      request.alert.header = TemperatureHeader.summerAbove;
      request.alert.comment = TemperatureComment.summerAbove;
      request.alert.serious = false;
      request.new_date = this.date;
      request.plant_id = this.plantControl.currentlyWired.plant_id;
      this.freshBakedAlerts.push(request.alert);
      this.alertControl.newAlert(request).subscribe();
    }
    if (this.logControl.currentLogs.temperatureLog.value < 8) {
      const request: AlertsRequest = new AlertsRequest();
      request.alert = new Alert();
      request.alert.datetime = this.date;
      request.alert.header = TemperatureHeader.below;
      request.alert.comment = TemperatureComment.below;
      request.alert.serious = true;
      request.new_date = this.date;
      request.plant_id = this.plantControl.currentlyWired.plant_id;
      this.freshBakedAlerts.push(request.alert);
      this.alertControl.newAlert(request).subscribe();
    }
  }

  private createOverwateredAlert( logs: WateringLog[] ): void {
    if (logs.filter(log => log.overwatered).length == logs.length) {
      const request: AlertsRequest = new AlertsRequest();
      request.alert = new Alert();
      request.alert.datetime = this.date;
      request.alert.header = WaterHeader.above;
      request.alert.comment = WaterComment.above;
      request.alert.serious = true;
      request.new_date = this.date;
      request.plant_id = this.plantControl.currentlyWired.plant_id;
      this.freshBakedAlerts.push(request.alert);
      this.alertControl.newAlert(request).subscribe();
    }
  }

  private generateNewWateringAlerts(): void {
    if ((this.date.getUTCMonth() < 6 || this.date.getUTCMonth() > 2) || (this.date.getUTCMonth() < 11 || this.date.getUTCMonth() > 8)) {
      const logRequest: LogsRequest = new LogsRequest();
      logRequest.limit = 504;
      logRequest.plant_id = this.plantControl.currentlyWired.plant_id;
      this.logControl.fetchWateringLogs(logRequest).subscribe(logs => {
        const logLength: number = (logs as Array<WateringLog>).length;
        if ((logs as Array<WateringLog>).filter(log => log.dry).length == logLength) {
          const request: AlertsRequest = new AlertsRequest();
          request.alert = new Alert();
          request.alert.datetime = this.date;
          request.alert.header = WaterHeader.below;
          request.alert.comment = WaterComment.below;
          request.alert.serious = true;
          request.new_date = this.date;
          request.plant_id = this.plantControl.currentlyWired.plant_id;
          this.freshBakedAlerts.push(request.alert);
          this.alertControl.newAlert(request).subscribe();
        }
      this.createOverwateredAlert((logs as Array<WateringLog>).slice(logLength-120, logLength));
      })
    } else if (this.date.getUTCMonth() < 9 || this.date.getUTCMonth() > 5) {
      const logRequest: LogsRequest = new LogsRequest();
      logRequest.limit = 168;
      logRequest.plant_id = this.plantControl.currentlyWired.plant_id;
      this.logControl.fetchWateringLogs(logRequest).subscribe(logs => {
        const logLength: number = (logs as Array<WateringLog>).length;
        if ((logs as Array<WateringLog>).filter(log => log.dry).length == logLength) {
          const request: AlertsRequest = new AlertsRequest();
          request.alert = new Alert();
          request.alert.datetime = this.date;
          request.alert.header = WaterHeader.below;
          request.alert.comment = WaterComment.below;
          request.alert.serious = true;
          request.new_date = this.date;
          request.plant_id = this.plantControl.currentlyWired.plant_id;
          this.freshBakedAlerts.push(request.alert);
          this.alertControl.newAlert(request).subscribe();
        }
        this.createOverwateredAlert((logs as Array<WateringLog>).slice(logLength-120, logLength));
      })
    } else {
      const logRequest: LogsRequest = new LogsRequest();
      logRequest.limit = 840;
      logRequest.plant_id = this.plantControl.currentlyWired.plant_id;
      this.logControl.fetchWateringLogs(logRequest).subscribe(logs => {
        const logLength: number = (logs as Array<WateringLog>).length;
        if ((logs as Array<WateringLog>).filter(log => log.dry).length == logLength) {
          const request: AlertsRequest = new AlertsRequest();
          request.alert = new Alert();
          request.alert.datetime = this.date;
          request.alert.header = WaterHeader.below;
          request.alert.comment = WaterComment.below;
          request.alert.serious = true;
          request.new_date = this.date;
          request.plant_id = this.plantControl.currentlyWired.plant_id;
          this.freshBakedAlerts.push(request.alert);
          this.alertControl.newAlert(request).subscribe();
        }
        this.createOverwateredAlert((logs as Array<WateringLog>).slice(logLength-120, logLength));
      })
    }
  }
}
