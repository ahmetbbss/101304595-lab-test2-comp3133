import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: '../mission-filter/mission-filter.component.html',
  // styleUrls: ['./missionfilter.component.css'] // Remove or comment out this line
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<number>();

  selectYear(year: number): void {
    this.yearSelected.emit(year);
  }
}
