import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html', // Correct file path
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent {
  @Input() selectedMission: any; // Input property to receive selected mission data

  constructor() { }
}
