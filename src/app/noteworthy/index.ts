import 'materialize-css';
import 'angular2-materialize';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';

import {NoteworthyComponent} from './noteworthy';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
  ],
  declarations: [
    NoteworthyComponent
  ],
  exports: [
    NoteworthyComponent
  ]
})
export class NoteworthyModule {}
