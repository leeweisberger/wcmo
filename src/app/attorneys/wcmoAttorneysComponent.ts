import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'wcmoAttorneysComponent',
  templateUrl: './wcmoAttorneysComponent.html'
})
export class WcmoAttorneysComponent {
  public types: TypeAttorney[] = [];

  constructor(private contentfulService: ContentfulService) {
    this.getAttorneys().then((result) => {
      const members: Attorney[] = [];
      const associates: Attorney[] = [];
      const councils: Attorney[] = [];
      for (const attorney of result) {
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

  getAttorneys(): Promise<Attorney[]> {
    return this.contentfulService.getLawyers();
  }
}

export class Attorney {
  constructor(
    public name: string,
    public areasOfPractice: string,
    public picture: string,
    public email: string,
    public phone: string,
    public title: 'member' | 'council' | 'associate',
    public fax: string,
    public location: string,
    public yearJoinedFirm: string,
    public litigation: string,
    public bar: string,
    public education: string,
    public memberships: string,
    public pastPositions: string,
    public bio: string,
  ) { }
}

class TypeAttorney {
  constructor(
    public attorneys: Attorney[],
    public title: string,
  ) { }
}
