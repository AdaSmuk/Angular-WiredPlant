import { Component, OnInit, HostBinding } from '@angular/core';
import { ArtificialLightControlService } from 'src/app/Core/Services/artificial-light-control.service';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
import { LogsControlService } from 'src/app/Core/Services/logs-control.service';
import { WateringLog, SunlightLog, TemperatureLog, Log, is_Sunlight, is_Temperature, is_Watering } from 'src/app/Core/Models/Logs';
import { PlantControlService } from 'src/app/Core/Services/plant-control.service';
import { LogsRequest } from 'src/app/Core/Models/Requests';
import { addZero, prepareDate } from 'src/app/Core/Models/Plant';

export enum ToogleEnum {
  ON = 'ON',
  OFF = 'OFF'
}

export enum ArtificialLightEnum {
  Allow = 'ALLOW',
  Forbid = 'FORBID'
}

@Component({
  selector: 'main-hub-buttons',
  templateUrl: './main-hub-buttons.view.html'
})
export class MainHubButtonsComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-buttons';


  public toggleLightButtonCaption: ToogleEnum;
  public artificialLightButtonCaption: ArtificialLightEnum;

  constructor(private alControl: ArtificialLightControlService,
    private logControl: LogsControlService,
    private plantControl: PlantControlService) {
    this.alControl.lightStatusReady.subscribe(value => {
      this.toggleLightButtonCaption = this.alControl.light_status.current == true ? ToogleEnum.ON : ToogleEnum.OFF;
      this.artificialLightButtonCaption = this.alControl.light_status.artificial == true ? ArtificialLightEnum.Allow : ArtificialLightEnum.Forbid;
    });
  }

  public toggleLightButton(): void {
    this.toggleLightButtonCaption = this.toggleLightButtonCaption === ToogleEnum.ON ? ToogleEnum.OFF : ToogleEnum.ON;
    this.alControl.switchCurrentLight().subscribe();

  }

  public toggleForbidArtificialButton(): void {
    this.artificialLightButtonCaption = this.artificialLightButtonCaption === ArtificialLightEnum.Allow ? ArtificialLightEnum.Forbid : ArtificialLightEnum.Allow;
    this.alControl.switchArtificialLight().subscribe();
  }

  public getCurrentSensorData(): void {
    this.logControl.fetchNewLogs();
  }

  private preparePDFBody(logs: Log[]): any[] {
    const body: any[] = [];
    if (is_Sunlight(logs[0])) {
      logs.forEach(log => {
        const row: any[] = [];
        row.push((log as SunlightLog).value + 'lx');
        if ((log as SunlightLog).artificial) row.push('Yes');
        else row.push('No');
        row.push(prepareDate((log as SunlightLog).datetime));
        body.push(row);
      })
      return body;
    }
    else if (is_Temperature(logs[0])) {
      logs.forEach(log => {
        const row: any[] = [];
        row.push((log as TemperatureLog).value + '°C');
        row.push(prepareDate((log as TemperatureLog).datetime));
        body.push(row);
      })
      return body;
    }
    else if (is_Watering(logs[0])) {
      logs.forEach(log => {
        const row: any[] = [];
        row.push((log as WateringLog).value + '%');
        if ((log as WateringLog).dry) row.push('Yes');
        else row.push('No');
        if ((log as WateringLog).overwatered) row.push('Yes');
        else row.push('No');
        row.push(prepareDate((log as WateringLog).datetime));
        body.push(row);
      })
      return body;
    }
    return null;
  }

  public printPDF(): void {
    const wateringLogs: WateringLog[] = [];
    const sunlightLogs: SunlightLog[] = [];
    const temperatureLogs: TemperatureLog[] = [];
    const request: LogsRequest = new LogsRequest();
    request.limit = 0;
    request.plant_id = this.plantControl.currentlyWired.plant_id;
    this.logControl.fetchSunlightLogs(request).subscribe(sunValues => {
      sunValues.forEach(log => {
        const temp: SunlightLog = new SunlightLog();
        temp.deserialize(log);
        sunlightLogs.push(temp);
      });
      this.logControl.fetchTemperatureLogs(request).subscribe(tempValues => {
        tempValues.forEach(log => {
          const temp: TemperatureLog = new TemperatureLog();
          temp.deserialize(log);
          temperatureLogs.push(temp);
        });
        this.logControl.fetchWateringLogs(request).subscribe(waterValues => {
          waterValues.forEach(log => {
            const temp: WateringLog = new WateringLog();
            temp.deserialize(log);
            wateringLogs.push(temp);
          });
          const doc = new jsPDF({
            'orientation': 'landscape'
          });
          doc.text('Sunlight Logs', 10, 10);
          doc.autoTable({
            head: [['Value', 'Artificial light status', 'Datetime']],
            body: this.preparePDFBody(sunlightLogs)
          });
          doc.addPage();
          doc.text('Temperature Logs', 10, 10);
          doc.autoTable({
            head: [['Value', 'Datetime']],
            body: this.preparePDFBody(temperatureLogs)
          });
          doc.addPage();
          doc.text('Watering Logs', 10, 10);
          doc.autoTable({
            head: [['Value', 'Dry', 'Overwatered', 'Datetime']],
            body: this.preparePDFBody(wateringLogs)
          });
          doc.save(this.plantControl.currentlyWired.family + '-' + this.plantControl.currentlyWired.species + '-' + this.plantControl.currentlyWired.name + '-logs.pdf')
        })
      })
    });
  }

  ngOnInit() {
    this.alControl.getLightStatus();
  }
}
