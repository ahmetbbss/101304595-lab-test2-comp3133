import { Component, Input } from '@angular/core';
import { SpaceXLaunch } from '../spacex-launch.interface';

@Component({
  selector: 'app-missiondetails',
  templateUrl: '../mission-details/mission-details.component.html',
  styleUrls: ['../mission-details/mission-details.component.css']
})
export class MissiondetailsComponent {
  @Input() launch!: SpaceXLaunch; // Marking launch as definitely assigned with !

  constructor() {}
}
