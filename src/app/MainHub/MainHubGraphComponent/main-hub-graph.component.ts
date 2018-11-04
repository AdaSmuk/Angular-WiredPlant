import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'main-hub-graph',
  templateUrl: './main-hub-graph.view.html'
})
export class MainHubGraphComponent implements OnInit {

  @HostBinding('class') styleClass = 'main-hub-graph';

  public soilMoistureDataSource: Object;
  public temperatureDataSource: Object;
  public sunlightDataSource: Object;
  public soilMoistureWidth: number;
  public soilMoistureHeight: number;
  public sunlightHeight: number;
  public sunlightWidth: number;
  public temperatureHeight: number;
  public temperatureWidth: number;

  private currentTemperaturColor: string;

  constructor() {
    this.currentTemperaturColor = '#7f8942';
    this.temperatureDataSource = {
      'chart': {
        'caption': 'Temperature Monitor',
        'lowerLimit': '-30',
        'upperLimit': '50',
        'decimals': '1',
        'numberSuffix': '°C',
        'showhovereffect': '1',
        'thmFillColor': this.currentTemperaturColor,
        'showGaugeBorder': '1',
        'gaugeBorderColor': '#008ee4',
        'gaugeBorderThickness': '2',
        'gaugeBorderAlpha': '30',
        'thmOriginX': '100',
        'chartBottomMargin': '20',
        'valueFontColor': '#000000',
        'theme': 'fusion'
      },
      'value': '8',
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
            'maxvalue': '30000',
            'label': 'A bit cloudy',
            'code': '#82baa9'
          },
          {
            'minvalue': '30000',
            'maxvalue': '65535',
            'label': 'Bright and sunny!',
            'code': '#ffd756'
          }
        ]
      },
      'value': '29000'
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
          'value': '81'
        }]
      }
    };
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
