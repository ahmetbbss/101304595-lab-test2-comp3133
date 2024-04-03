import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MissionlistComponent } from '../missionlist/missionlist.component';
import { MissionfilterComponent } from '../mission-filter/mission-filter.component';
import { MissiondetailsComponent } from '../mission-details/mission-details.component';
import { SpaceXService } from '../spacex-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
