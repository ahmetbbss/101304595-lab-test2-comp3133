import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXLaunch } from './spacex-launch.interface';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getAllLaunches(): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(`${this.baseUrl}/launches`);
  }

  getLaunchByYear(year: number): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(`${this.baseUrl}/launches?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: string): Observable<SpaceXLaunch> {
    return this.http.get<SpaceXLaunch>(`${this.baseUrl}/launches/${flightNumber}`);
  }
}
