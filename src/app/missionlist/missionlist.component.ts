import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../spacex.service';
import { SpaceXLaunch } from '../spacex-launch.interface';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: SpaceXLaunch[] = [];

  constructor(private spacexService: SpaceXService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): void {
    this.spacexService.getAllLaunches()
      .subscribe(launches => this.launches = launches);
  }
}
