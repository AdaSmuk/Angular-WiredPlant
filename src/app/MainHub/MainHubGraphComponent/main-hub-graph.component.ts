import { Component, OnInit, HostBinding } from '@angular/core';
import { LogsControlService } from 'src/app/Core/Services/logs-control.service';
import { PlantControlService } from 'src/app/Core/Services/plant-control.service';
import { ArtificialLightControlService } from 'src/app/Core/Services/artificial-light-control.service';

@Component({
  selector: 'main-hub-graph',
  templateUrl: './main-hub-graph.view.html'
})
export class MainHubGraphComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-graph';

  public temperatureDataSource: any;
  public soilMoistureDataSource: any;
  public sunlightDataSource: any;
  public soilMoistureWidth: number;
  public soilMoistureHeight: number;
  public sunlightHeight: number;
  public sunlightWidth: number;
  public temperatureHeight: number;
  public temperatureWidth: number;

  constructor(private logsControl: LogsControlService,
              private plantControl: PlantControlService,
              private alControl: ArtificialLightControlService) {
      this.temperatureDataSource = {
      'chart': {
        'caption': 'Temperature Monitor',
        'lowerlimit': '-10',
        'upperlimit': '50',
        'decimals': '1',
        'numbersuffix': '°C',
        'showhovereffect': '1',
        'thmfillcolor': '#7f8942',
        'showgaugeborder': '1',
        'gaugebordercolor': '#008ee4',
        'gaugeborderthickness': '2',
        'gaugeborderalpha': '30',
        'thmoriginx': '100',
        'chartbottommargin': '20',
        'valuefontcolor': '#000000',
        'showvalue': '1',
        'theme': 'fusion'
      },
      'value': 0,
      'annotations': {
        'showbelow': '1',
      }
    };
    this.sunlightDataSource = {
      'chart': {
        'caption': 'Light level status',
        'upperlimit': '65535',
        'lowerlimit': '0',
        'captionPadding': '30',
        'showshadow': '0',
        'showvalue': '1',
        'useColorNameAsValue': '1',
        'placeValuesInside': '1',
        'valueFontSize': '16',
        'plottooltext': '<span id=\'headerdiv\' style=\'font-family:"Arial";font-size: 13px;font-weight: bold;\'>Current light intensivity:</span>{br}<div id=\'valueDiv\' style=\' color: #ffd756; text-align:center;font-size: 25px; padding: 10px;  margin-top:5px; font-family:"Arial"; font-weight: bold;\'>$value lx</div>',
        'theme': 'fusion'
      },
      'colorrange': {
        'color': [
          {
            'minvalue': '0',
            'maxvalue': '5000',
            'label': 'It\'s too dark <br> (unless it\'s night-time)',
            'code': '#cccccc'
          },
          {
            'minvalue': '5000',
            'maxvalue': '15000',
            'label': 'A bit cloudy',
            'code': '#82baa9'
          },
          {
            'minvalue': '15000',
            'maxvalue': '65535',
            'label': 'Bright and sunny!',
            'code': '#ffd756'
          }
        ]
      },
      'value': 0
    };
    this.soilMoistureDataSource = {
      'chart': {
        'caption': 'Current soil moisture',
        'renderAt': 'chartContainer',
        'lowerLimit': '0',
        'upperLimit': '100',
        'showValue': '1',
        'numberSuffix': '',
        'theme': 'fusion',
        'showToolTip': '0'
      },
      'colorRange': {
        'color': [{
          'minValue': '0',
          'maxValue': '45',
          'code': '#7f8942'
        }, {
          'minValue': '45',
          'maxValue': '70',
          'code': '#ffd756'
        }, {
          'minValue': '70',
          'maxValue': '100',
          'code': '#cc4b37'
        }]
      },
      'dials': {
        'dial': [{
          'value': 0
        }]
      }
    };
    this.plantControl.plantsReady.subscribe( value => {
      this.logsControl.getLastLogs(this.plantControl.currentlyWired);
    });
    this.logsControl.logsReady.subscribe( value => {
      this.updateChartData();
    })
    this.logsControl.newLogsReady.subscribe( value => {
      this.logsControl.getLastLogs(this.plantControl.currentlyWired);
      this.alControl.getLightStatus();
    })
  }

  private updateChartData() {
    this.soilMoistureDataSource['dials']['dial'][0]['value'] = this.logsControl.currentLogs.wateringLog.value;
    this.sunlightDataSource.value = this.logsControl.currentLogs.sunlightLog.value;

    this.temperatureDataSource.value = this.logsControl.currentLogs.temperatureLog.value;
    if (this.logsControl.currentLogs.temperatureLog.value <= 10) {
      this.temperatureDataSource.chart.thmFillColor = '#82baa9';
    }
    else if (this.logsControl.currentLogs.temperatureLog.value > 10 && this.logsControl.currentLogs.temperatureLog.value <= 16) {
      this.temperatureDataSource.chart.thmFillColor = '#ffd756';
    } else if (this.logsControl.currentLogs.temperatureLog.value > 16) {
      this.temperatureDataSource.chart.thmFillColor = '#7f8942';
    }
  }

  ngOnInit() {
    this.soilMoistureHeight = 200;
    this.soilMoistureWidth = 320;

    this.sunlightHeight = 250;
    this.sunlightWidth = 250;

    this.temperatureHeight = 250;
    this.temperatureWidth = 200;
    
  }
}
