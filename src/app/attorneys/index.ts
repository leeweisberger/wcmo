import 'materialize-css';
import 'angular2-materialize';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {routing} from '.././routes';

import {WcmoAttorneysComponent} from './wcmoAttorneysComponent';
import {WcmoAttorneyComponent} from './wcmoAttorneyComponent';
import {WcmoAttorneyCardComponent} from './wcmoAttorneyCardComponent';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    routing,
    AngularFirestoreModule,
  ],
  declarations: [
    WcmoAttorneysComponent,
    WcmoAttorneyCardComponent,
    WcmoAttorneyComponent,
  ],
  exports: [
    WcmoAttorneysComponent,
  ]
})
export class AttorneysModule {}
