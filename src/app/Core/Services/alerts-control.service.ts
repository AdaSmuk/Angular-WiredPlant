import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtificialLight } from '../Models/ArtificialLight';
import { Observable } from 'rxjs';
import { Alert } from '../Models/Alert';
import { AlertsRequest } from '../Models/Requests';
import { Plant } from '../Models/Plant';

@Injectable({
    providedIn: 'root',
})
export class AlertsControlService {

    private apiURL: string = 'http://192.168.0.24:5000';

    public showAlertTriangle: EventEmitter<boolean> = new EventEmitter<boolean>();
    public dateReady: EventEmitter<Date> = new EventEmitter<Date>();

    constructor(private httpClient: HttpClient) { 
    }

    public newAlert(request:AlertsRequest): Observable<any> {
        return this.httpClient.post(this.apiURL + '/new_alert', request);
    }

    public getAlerts(plant: Plant): Observable<any> {
        return this.httpClient.post(this.apiURL + '/all_alerts', plant);
    }

    public getAlertDate(plant: Plant): void {
        this.httpClient.post(this.apiURL + '/alert_date', plant).subscribe(date => {
            this.dateReady.next(new Date((date as string)));
        })
    }
}
