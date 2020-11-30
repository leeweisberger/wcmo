import {Component, Input} from '@angular/core';
import {Attorney} from './wcmoAttorneysComponent';

@Component({
  selector: 'wcmoAttorneyCardComponent',
  templateUrl:'./wcmoAttorneyCardComponent.html'
})
export class WcmoAttorneyCardComponent {
  @Input() public attorney: Attorney;

  getPicture(): string {
    return `http:${this.attorney.picture}`;
  }
}
