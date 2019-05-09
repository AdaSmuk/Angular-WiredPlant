import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewPlantComponent } from './AddNewPlant/add-new-plant.component';
import { MainHubComponent } from './MainHub/main-hub.component';

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
    path: 'addnewplant',
    component: AddNewPlantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
