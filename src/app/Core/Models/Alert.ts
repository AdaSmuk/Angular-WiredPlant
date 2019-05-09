import { Serializable } from "./Serializable";
import { prepareDate } from "./Plant";

export class Alert implements Serializable{
    header: string;
    comment: string;
    datetime: Date;
    serious: boolean;

    deserialize(value: any): void {
        if (value != null) {
            this.datetime = value.datetime != null ? new Date(value.datetime): null;
            this.comment = value.comment;
            this.header = value.header;
            this.serious = value.serious;
        } 
    }

    public getFormatedDate(): string {
        return prepareDate(this.datetime);
    }
}

export enum WaterHeader {
    below = "Dry for too long!",
    above = "Moist for too long!",
}

export enum WaterComment {
    below = "Your plant is dry for too long! You should water it as fast as possible!",
    above = "Your plant is overwatered! Raise air temperature to speed up the evaporation of water!"
}

export enum SunlightHeader {
    greyArtificial = "Artificial light recommended",
    redArtificial = "Artificial light necessary!"
    
}

export enum SunlightComment {
    greyArtificial = "Your plant received not adequate amount of sunlight lately. Consider allowing usage of artificial light.",
    redArtificial = "During winter artificial light is necessary! Allow usage of artificial light as soon as possible!"
}

export enum TemperatureHeader {
    below = "Too cold!",
    summerAbove = "High temperature",
    greyWinter = "Warm in winter",
    redWinter = "Too hot in winter!"
    
}

export enum TemperatureComment {
    below = "It's way too cold for your plant to grow. Raise air temperature by closing windows or using air heater!",
    summerAbove = "It's very hot. You should observe soil moisture and consider watering more often.",
    greyWinter = "It's too warm for winter dormancy. You should consider turning off air heaters or opening windows.",
    redWinter = "It's way too hot for winter dormancy! Turn off air heaters and open windows to stop plant growth!"
}