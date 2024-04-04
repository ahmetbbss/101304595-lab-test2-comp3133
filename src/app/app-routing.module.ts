import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './mission-details/mission-details.component';
import { MissionfilterComponent } from './mission-filter/mission-filter.component';

const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'rocket', component: MissiondetailsComponent },
  { path: 'filter', component: MissionfilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
