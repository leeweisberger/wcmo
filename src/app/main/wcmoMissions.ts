import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Mission} from './wcmoMission';


@Component({
  selector: 'wcmoMissions',
  templateUrl: './wcmoMissions.html'
})

export class WcmoMissionsComponent {
  public missions: Mission[];

  constructor(private http: Http) {
    
  }

  ngOnInit() {
    this.getMissions().subscribe(missions =>
      this.missions = missions);
  }

  getMissions(): Observable<Mission[]> {
    return this.http
      .get('assets/missions.json')
      .map(response => response.json());
  }
}
