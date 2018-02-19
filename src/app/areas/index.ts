import 'materialize-css';
import 'angular2-materialize';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';
import {routing} from '.././routes';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import {AreasComponent} from './areas';
import {LawyersComponent} from './lawyers';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    routing,
    Ng2PageScrollModule,
  ],
  declarations: [
    AreasComponent,
    LawyersComponent
  ],
  exports: [
  	AreasComponent
  ]
})

export class AreasModule {}
