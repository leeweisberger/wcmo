import 'materialize-css';
import 'angular2-materialize';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

import {routing, RootComponent} from './routes';
import {MaterializeModule} from 'angular2-materialize';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {WcmoCarouselResolver} from './main/wcmoCarousel'

import {MainModule} from './main';
import {AttorneysModule} from './attorneys';
import {NoteworthyModule} from './noteworthy';
import {AreasModule} from './areas';

import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MainModule,
    MaterializeModule,
    Ng2PageScrollModule.forRoot(),
    AttorneysModule,
    NoteworthyModule,
    AreasModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent],
  providers: [WcmoCarouselResolver],
})
export class AppModule {}
