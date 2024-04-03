import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Import RouterModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatSelectModule } from '@angular/material/select'; // Import any other necessary Angular Material modules

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component'; // Import your components
// Import other necessary components, services, etc.

@NgModule({
  declarations: [
    // Other components declared here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule, // Add MatCardModule here
    MatSelectModule, // Add any other Angular Material modules you need here
    RouterModule.forRoot([
      { path: '', redirectTo: '/missions', pathMatch: 'full' }, // Redirect to /missions
      { path: 'missions', component: MissionlistComponent },
      // Add the route for MissiondetailsComponent if needed
    ]),
    // Add RouterModule with .forRoot() to configure routes here
    // Other modules imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
