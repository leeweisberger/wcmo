import 'materialize-css';
import 'angular2-materialize';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import {routing} from '.././routes';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { HttpModule } from '@angular/http';

import {MainComponent} from './main';
import {WcmoContactComponent} from './wcmoContact';
import {WcmoMissionsComponent} from './wcmoMissions';
import {WcmoMissionComponent} from './wcmoMission';
import {WcmoCarouselComponent, WcmoCarouselResolver} from './wcmoCarousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    routing,
    Ng2PageScrollModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoQBbKkyYKHa5hxvZiJfleRaouj55aYak'
    }),
    
  ],
  declarations: [
    MainComponent,
    WcmoContactComponent,
    WcmoMissionsComponent,
    WcmoMissionComponent,
    WcmoCarouselComponent,
    // WcmoCarouselResolver,
  ],
  exports: [
    MainComponent,
    // WcmoCarouselResolver,
  ]
})
export class MainModule {}
