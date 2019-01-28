import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Attorney } from './wcmoAttorneysComponent';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'wcmoAttorneyComponent',
  templateUrl: './wcmoAttorneyComponent.html'
})
export class WcmoAttorneyComponent {
  public attorney: Attorney;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAttorneys().subscribe((result) => {
      for (const attorney of result) {
        if (attorney.name.split(' ')[2] === this.route.snapshot.params['name'] || attorney.name.split(' ')[1] === this.route.snapshot.params['name']) {
          this.attorney = attorney;
          break;
        }
      }
    });
  }

  private getAttorneys(): Observable<Attorney[]> {
    return this.db.collection('attorneys').valueChanges() as Observable<Attorney[]>;
  }

  getPicture(): string {
    return '../../images/' + this.attorney.picture;
  }
}
