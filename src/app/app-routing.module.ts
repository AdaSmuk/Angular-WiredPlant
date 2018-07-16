import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
// {
//   path: 'home',
//   component: MainHubComponent,
// },
// {
//   path: 'alerts',
//   component: AlertsComponent,
// },
// {
//   path: 'logs',
//   component: LogsComponent,
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
