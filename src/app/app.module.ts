// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// Import other Angular Material modules as needed

import { AppComponent } from './app.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
    // Add other Angular Material modules as needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
