import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewPlantComponent } from './AddNewPlant/add-new-plant.component';
import { MainHubComponent } from './MainHub/main-hub.component';
import { InformationHubComponent } from './InformationHub/information-hub.component';
import { AlertsHubComponent } from './AlertsHub/alerts-hub.component';
import { GraphsHubComponent } from './GraphsHub/graphs-hub.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainHubComponent,
  },
  {
    path: 'informations',
    component: InformationHubComponent,
  },
  {
    path: 'alerts',
    component: AlertsHubComponent,
  },
  {
    path: 'charts',
    component: GraphsHubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
