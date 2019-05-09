import { Serializable } from "./Serializable";
import { Alert } from "./Alert";

export class RewireRequest{
    
    current_wired: string;
    new_wired: string;

}

export class LogsRequest {

    plant_id: string;
    limit: number;

}

export class AlertsRequest {

    plant_id: string;
    alert: Alert;
    new_date: Date;

}