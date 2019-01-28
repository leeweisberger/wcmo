import 'materialize-css';
import 'angular2-materialize';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { routing, RootComponent } from './routes';
import { MaterializeModule } from 'angular2-materialize';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { WcmoCarouselResolver } from './main/wcmoCarousel'
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { MainModule } from './main';
import { AttorneysModule } from './attorneys';
import { NoteworthyModule } from './noteworthy';
import { AreasModule } from './areas';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MainModule,
    MaterializeModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    NgxPageScrollModule,
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
export class AppModule { }
