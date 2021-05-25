import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'wcmoAttorneysComponent',
  templateUrl: './wcmoAttorneysComponent.html'
})
export class WcmoAttorneysComponent {
  public attorneys: Attorney[] = [];

  constructor(private contentfulService: ContentfulService) {
    this.getAttorneys().then((lawyers) => {
      this.attorneys = lawyers;
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
