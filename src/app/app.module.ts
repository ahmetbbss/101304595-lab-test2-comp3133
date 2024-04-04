import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule, not NgModule
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule

import { AppComponent } from './app.component';
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
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    MissionfilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // Import AppRoutingModule here
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) // Import RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
