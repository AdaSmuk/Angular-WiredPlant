import { serializePath } from "@angular/router/src/url_tree";

export interface Serializable {
    
    deserialize(value: any): void;
}