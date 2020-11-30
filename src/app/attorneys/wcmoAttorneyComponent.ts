import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Attorney } from './wcmoAttorneysComponent';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'wcmoAttorneyComponent',
  templateUrl: './wcmoAttorneyComponent.html'
})
export class WcmoAttorneyComponent {
  public attorney: Attorney;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService ) {

  }

  ngOnInit() {
    this.getAttorneys().then((result) => {
      for (const attorney of result) {
        if (attorney.name.split(' ')[2] === this.route.snapshot.params['name'] || attorney.name.split(' ')[1] === this.route.snapshot.params['name']) {
          this.attorney = attorney;
          break;
        }
      }
    });
  }

  getAttorneys(): Promise<Attorney[]> {
    return this.contentfulService.getLawyers();
  }

  getPicture(): string {
    return `http:${this.attorney.picture}`;
  }
}
