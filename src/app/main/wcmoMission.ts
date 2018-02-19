import {Component, Input} from '@angular/core';


@Component({
  selector: 'wcmoMission',
  templateUrl: './wcmoMission.html'
})

export class WcmoMissionComponent {
  @Input() public mission: Mission;
}

export interface Mission {
  title: string;
  text: string;
  logo: string;
}
