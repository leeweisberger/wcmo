import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'wcmoAttorneysComponent',
  templateUrl: './wcmoAttorneysComponent.html'
})
export class WcmoAttorneysComponent {
  public types: TypeAttorney[] = [];

  constructor(private db: AngularFirestore) {
    this.getAttorneys().subscribe((result) => {
      const members: Attorney[] = [];
      const associates: Attorney[] = [];
      const councils: Attorney[] = [];
      for (let attorney of result) {
        if (attorney.title === 'member') {
          members.push(attorney);
        } else if (attorney.title === 'council') {
          councils.push(attorney);
        } else {
          associates.push(attorney);
        }
      }
      if (members.length) {
        this.types.push(new TypeAttorney(members, 'Members'));
      }
      if (associates.length) {
        this.types.push(new TypeAttorney(associates, 'Associates'));
      }
      if (councils.length) {
        this.types.push(new TypeAttorney(councils, 'Counsel'));
      }
    });
  }

  getAttorneys(): Observable<Attorney[]> {
    return this.db.collection('attorneys').valueChanges() as Observable<Attorney[]>;
  }
}

export class Attorney {
  constructor(
    public name: string,
    public areas: string[],
    public picture: string,
    public email: string,
    public phone: string,
    public title: string,
    public fax: string,
    public location: string,
    public yearJoined: string,
    public litigation: string,
    public bar: string,
    public education: AttorneyEducation[],
    public memberships: string[],
    public past: string[],
    public bio: string[] 
  ) { }
}

class AttorneyEducation {
  constructor(
    public school: string,
    public degree: string) { }
}

class TypeAttorney {
  constructor(
    public attorneys: Attorney[],
    public title: string,
  ) { }
}
