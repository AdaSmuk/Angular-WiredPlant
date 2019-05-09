import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../Models/Plant';
import { RewireRequest } from '../Models/Requests';

@Injectable({
  providedIn: 'root',
})
export class PlantControlService {

  public plantsReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  public plants: Plant[] = [];
  public currentlyWired: Plant;
  private apiURL: string = 'http://192.168.0.24:5000';

  constructor(private httpClient: HttpClient) {
  }

  public createPlant(newPlant: Plant): Observable<any> {
    return this.httpClient.post(this.apiURL + '/new_plant', newPlant);
  }

  public deletePlant(plant: Plant): Observable<any> {
    return this.httpClient.post(this.apiURL + '/delete_plant', plant);
  }

  public getAllPlants(): void {
    this.httpClient.get(this.apiURL + '/all_plants').subscribe(value => {
      if (this.plants.length != value['plants'].length) {
        this.plants = [];
        value['plants'].forEach(plant => {
          const temp: Plant = new Plant();
          temp.deserialize(plant);
          this.plants.push(temp);
        });
        this.currentlyWired = this.plants.filter(plant => plant.wired === true)[0];
        this.plantsReady.next(true);
      }
    });
  }

  public rewirePlants(plant: Plant): void{
    const request: RewireRequest = new RewireRequest();
    request.current_wired = this.currentlyWired.plant_id;
    request.new_wired = plant.plant_id;
    this.httpClient.post(this.apiURL + '/rewire', request).subscribe(value => {
        this.currentlyWired = plant;
    })
  }
}
