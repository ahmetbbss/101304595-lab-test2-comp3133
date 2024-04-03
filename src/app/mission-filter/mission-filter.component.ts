import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Output() filterByYear = new EventEmitter<string>();

  year: string = '';

  constructor() { }

  onSearch(): void {
    this.filterByYear.emit(this.year);
  }
}
