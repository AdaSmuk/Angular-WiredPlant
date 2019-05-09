import { Serializable } from "./Serializable";

export function addZero(number: number): string {
    return number > 9 ? number.toString() : '0' + number;
  }

export function prepareDate(date: Date): string {
    return addZero(date.getUTCDate()) + '.' + addZero(date.getUTCMonth()) + '.' + date.getUTCFullYear() + ' ' + addZero(date.getUTCHours()) + ':' + addZero(date.getUTCMinutes());
  }

export class Plant implements Serializable{

    plant_id: string;
    wired: boolean;
    species: string;
    family: string;
    name: string;
    created: Date;

    deserialize(value: any): void {
        if (value != null) {
            this.created = value.created != null ? new Date(value.created): null;
            this.species = value.species;
            this.family = value.family;
            this.name = value.name;
            if (value.id) this.plant_id = value.id;
            else if (value.plant_id) this.plant_id = value.plant_id;
            this.wired = value.wired;
        } 
    }
}