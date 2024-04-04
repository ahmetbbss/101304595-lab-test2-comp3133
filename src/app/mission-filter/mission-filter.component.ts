import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<number>();
  launchYears: number[] = [2020, 2021, 2022, 2023, 2024]; // Sample array of launch years

  selectYear(event: any): void {
    const year: number = parseInt(event.target?.value, 10); // Parse string to integer
    if (!isNaN(year)) { // Check if parsing was successful
      this.yearSelected.emit(year);
    }
  }
}
