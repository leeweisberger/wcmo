import 'materialize-css';
import 'angular2-materialize';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { routing } from '.././routes';
import { HttpModule } from '@angular/http';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { MainComponent } from './main';
import { WcmoContactComponent } from './wcmoContact';
import { WcmoMissionsComponent } from './wcmoMissions';
import { WcmoMissionComponent } from './wcmoMission';
import { WcmoCarouselComponent } from './wcmoCarousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPageScrollCoreModule,
    MaterializeModule,
    routing,
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
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
