import { OnInit, HostBinding, Component, OnDestroy, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Plant, prepareDate } from "../Core/Models/Plant";
import { PlantControlService } from "../Core/Services/plant-control.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
    selector: 'information-hub',
    templateUrl: './information-hub.view.html',
})
export class InformationHubComponent implements OnInit, OnDestroy {

    @HostBinding('class') styleClass = 'information-hub';

    private modalRef: BsModalRef;
    private routeSub: any;
    public plant: Plant;

    public afterDelete: boolean;

    constructor(private route: ActivatedRoute,
        private plantControl: PlantControlService,
        private modalService: BsModalService) {
        this.routeSub = this.route.queryParams.subscribe(params => {
            this.plant = new Plant();
            this.plant.deserialize(params);
        });
    }

    public getDate(): string {
        return prepareDate(this.plant.created);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }

    confirm(): void {
        if (this.plantControl.plants.length > 1 && this.plant.plant_id == this.plantControl.currentlyWired.plant_id) {
            let newPlant: Plant;
            for (let plant of this.plantControl.plants){
                if (!plant.wired) {
                    newPlant = plant;   
                    break;             
                }
            }
            this.plantControl.rewirePlants(newPlant);
        }
        this.plantControl.deletePlant(this.plant).subscribe();
        this.plantControl.getAllPlants();
        this.afterDelete = true;
        this.modalRef.hide();
    }

    decline(): void {
        this.modalRef.hide();
    }

    ngOnInit() {
        this.afterDelete = false;
    }

    ngOnDestroy() {
        this.afterDelete = false;
        this.routeSub.unsubscribe();
    }

}