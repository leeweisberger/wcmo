import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'fountain-app',
  templateUrl: './main.html'
})

export class MainComponent {

  constructor(private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    PageScrollConfig.defaultDuration = 700;
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.router.url === '/contact') {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#contact');
        setTimeout(() => {this.pageScrollService.start(pageScrollInstance);}, 300);
        
      }
      subscription.unsubscribe();
    });
  }
}
