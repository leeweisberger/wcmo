import 'materialize-css';
import 'angular2-materialize';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from '.././routes';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AreasComponent } from './areas';
import { LawyersComponent } from './lawyers';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    routing,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    NgxPageScrollModule,
  ],
  declarations: [
    AreasComponent,
    LawyersComponent
  ],
  exports: [
    AreasComponent
  ]
})

export class AreasModule { }
