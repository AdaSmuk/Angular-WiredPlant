import { Serializable } from "./Serializable";

export function is_Sunlight(log: Log) {
    return log instanceof SunlightLog;
}

export function is_Temperature(log: Log) {
    return log instanceof TemperatureLog;
}

export function is_Watering(log: Log) {
    return log instanceof WateringLog;
}

export abstract class Log {
    datetime: Date;
    value: number;
}

export class SunlightLog extends Log implements Serializable {
    artificial: boolean;

    deserialize(logValue: any): void {
        if (logValue != null) {
            this.datetime = logValue.datetime != null ? new Date(logValue.datetime): null;
            this.value = logValue.value;
            this.artificial = logValue.artificial;
        } 
    }
}

export class TemperatureLog extends Log implements Serializable {

    deserialize(logValue: any): void {
        if (logValue != null) {
            this.datetime = logValue.datetime != null ? new Date(logValue.datetime): null;
            this.value = logValue.value;
        } 
    }
}

export class WateringLog extends Log implements Serializable {
    dry: boolean;
    overwatered: boolean;

    deserialize(logValue: any): void {
        if (logValue != null) {
            this.datetime = logValue.datetime != null ? new Date(logValue.datetime): null;
            this.value = logValue.value;
            this.dry = logValue.dry;
            this.overwatered = logValue.overwatered
        } 
    }
}

export class CurrentLogs {
    wateringLog: WateringLog;
    sunlightLog: SunlightLog;
    temperatureLog: TemperatureLog;

    constructor() {
        this.sunlightLog = new SunlightLog();
        this.temperatureLog = new TemperatureLog();
        this.wateringLog = new WateringLog();
        this.temperatureLog.value = 0;
        this.wateringLog.value = 0;
        this.sunlightLog.value = 0;
    }
}