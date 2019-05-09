import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../Models/Plant';
import { LogsRequest } from '../Models/Requests';
import { CurrentLogs } from '../Models/Logs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LogsControlService {

    public currentLogs: CurrentLogs = new CurrentLogs();

    public logsReady: EventEmitter<boolean> = new EventEmitter<boolean>();
    public newLogsReady: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    private apiURL: string = 'http://192.168.0.24:5000';

    constructor(private httpClient: HttpClient) { }

    public getLastLogs(plant: Plant) {
        const request: LogsRequest = new LogsRequest;
        request.limit = 1;
        request.plant_id = plant.plant_id;
        this.httpClient.post(this.apiURL + '/watering_log', request).subscribe(log1 => {
            this.currentLogs.wateringLog.deserialize(log1[0]);
            this.httpClient.post(this.apiURL + '/sunlight_log', request).subscribe(log2 => {
                this.currentLogs.sunlightLog.deserialize(log2[0]);
                this.httpClient.post(this.apiURL + '/temperature_log', request).subscribe(log3 => {
                    this.currentLogs.temperatureLog.deserialize(log3[0]);
                    this.logsReady.next(true);
                });
            });
        });
    }

    public fetchNewLogs(): void {
        this.httpClient.get(this.apiURL + '/new_logs').subscribe(observer => {
            this.newLogsReady.next(true);
        });
    }

    public fetchWateringLogs(request: LogsRequest): Observable<any> {
        return this.httpClient.post(this.apiURL + '/watering_log', request);
    }

    public fetchSunlightLogs(request: LogsRequest): Observable<any> {
        return this.httpClient.post(this.apiURL + '/sunlight_log', request);
    }

    public fetchTemperatureLogs(request: LogsRequest): Observable<any> {
        return this.httpClient.post(this.apiURL + '/temperature_log', request);
    }

}
