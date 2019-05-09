import { OnInit, HostBinding, Component, OnDestroy } from "@angular/core";
import { LogsRequest } from "../Core/Models/Requests";
import { PlantControlService } from "../Core/Services/plant-control.service";
import { LogsControlService } from "../Core/Services/logs-control.service";
import { Chart } from 'chart.js';
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
    selector: 'graphs-hub',
    templateUrl: './graphs-hub.view.html',
})
export class GraphsHubComponent implements OnInit, OnDestroy {

    @HostBinding('class') styleClass = 'graphs-hub';

    public temperatureChart: any[];
    public sunlightChart: any[];
    public wateringChart: any[];

    public temperatureReady: boolean = false;
    public wateringReady: boolean = false;
    public sunlightReady: boolean = false;

    constructor(private plantControl: PlantControlService,
        private logControl: LogsControlService) {
    }

    ngOnInit() {
        const request: LogsRequest = new LogsRequest();
        request.limit = 168;
        request.plant_id = this.plantControl.currentlyWired.plant_id;
        const datesLabels = [];
        this.logControl.fetchSunlightLogs(request).subscribe(logs => {
            let dates: any[] = logs.map(log => log.datetime);
            let sunlight = logs.map(log => log.value);
            dates.forEach(date => {
                const timestamp: Date = new Date(date);
                datesLabels.push(timestamp.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));

            });
            this.sunlightChart = [];
            this.sunlightChart = new Chart('sunlightCanvas', {
                type: 'line',
                data: {
                    labels: datesLabels,
                    datasets: [
                        {
                            data: sunlight,
                            borderColor: "#ffd756",
                            fill: false
                        },
                    ]
                },
                options: {
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return tooltipItem.yLabel + "lx";;
                            }
                        }
                    },
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                min: 0,
                                callback: function(value, index, values) {
                                    return value + 'lx';
                                }
                            }
                        }],
                    }
                }
            });
            this.sunlightReady = true;
        });
        this.logControl.fetchWateringLogs(request).subscribe(logs => {
            let watering = logs.map(log => log.value);
            this.wateringChart = [];
            this.wateringChart = new Chart('wateringCanvas', {
                type: 'line',
                data: {
                    labels: datesLabels,
                    datasets: [
                        {
                            data: watering,
                            borderColor: "#82baa9",
                            fill: false
                        },
                    ]
                },
                options: {
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return tooltipItem.yLabel + "%";;
                            }
                        }
                    },
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                min: 0,
                                max: 100,
                                callback: function(value, index, values) {
                                    return value + '%';
                                }
                            }
                        }],
                    }
                }
            });
            this.wateringReady = true;
        });
        this.logControl.fetchTemperatureLogs(request).subscribe(logs => {
            let temperature = logs.map(log => log.value);
            this.temperatureChart = [];
            this.temperatureChart = new Chart('temperatureCanvas', {
                type: 'line',
                data: {
                    labels: datesLabels,
                    datasets: [
                        {
                            data: temperature,
                            borderColor: "#cc4b37",
                            fill: false
                        },
                    ]
                },
                options: {
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return tooltipItem.yLabel + "°C";;
                            }
                        }
                    },
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                min: -20,
                                max: 60,
                                callback: function(value, index, values) {
                                    return value + '°C';
                                }
                            }
                        }],
                    }
                }
            });
            this.temperatureReady = true;
        });
    }

    ngOnDestroy(): void {
        this.temperatureReady = false;
        this.temperatureChart = [];
        this.wateringReady = false;
        this.wateringChart = [];
        this.sunlightReady = false;
        this.sunlightChart = [];
    }
}