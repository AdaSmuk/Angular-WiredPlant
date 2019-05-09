import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtificialLight } from '../Models/ArtificialLight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtificialLightControlService {

  public lightStatusReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  public light_status: ArtificialLight;
  private apiURL: string = 'http://192.168.0.24:5000';

  constructor(private httpClient: HttpClient) { 
    this.light_status = new ArtificialLight();
  }

  public getLightStatus() {
      this.httpClient.get(this.apiURL + '/light_status').subscribe( value => {
        this.light_status.deserialize(value);
        this.lightStatusReady.next(true);
      });
  }

  public switchArtificialLight(): Observable<any> {
    return this.httpClient.get<ArtificialLight>(this.apiURL + '/switch_artificial_light')
  }

  public switchCurrentLight(): Observable<any> {
    return this.httpClient.get<ArtificialLight>(this.apiURL + '/switch_current_light')
  }
}
