import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Mission } from './wcmoMission';
import { map } from 'rxjs/operators';

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
      .get('assets/missions.json').pipe(
        map(response => response.json()));
  }
}
