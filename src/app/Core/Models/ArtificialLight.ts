import { Serializable } from "./Serializable";

export class ArtificialLight implements Serializable{
    current: boolean;
    artificial: boolean;

    deserialize(value: any): void {
        if (value != null) {
            this.current = value.current;
            this.artificial = value.artificial;
        } 
    }
}