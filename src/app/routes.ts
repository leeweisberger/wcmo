import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main';
import {WcmoCarouselResolver} from './main/wcmoCarousel'
import {WcmoContactComponent} from './main/wcmoContact';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {WcmoAttorneysComponent} from './attorneys/wcmoAttorneysComponent';
import {WcmoAttorneyComponent} from './attorneys/wcmoAttorneyComponent';
import {NoteworthyComponent} from './noteworthy/noteworthy';
import {AreasComponent} from './areas/areas';

@Component({
  selector: 'wcmo-root',
  template: '<wcmo-header></wcmo-header><router-outlet></router-outlet><wcmo-footer></wcmo-footer>',
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '', component: MainComponent, resolve: {carousel: WcmoCarouselResolver}
  },
  {
    path: 'contact', component: MainComponent, resolve: {carousel: WcmoCarouselResolver}
  },
  {
    path: 'attorneys',
    component: WcmoAttorneysComponent
  },
  {
    path: 'attorney/:name',
    component: WcmoAttorneyComponent
  },
  {
    path: 'noteworthy',
    component: NoteworthyComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'areas/:area',
    component: AreasComponent
  },
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
