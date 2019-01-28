import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'fountain-app',
  templateUrl: './main.html'
})

export class MainComponent implements OnInit {

  constructor(private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    if (this.router.url === '/contact') {
      setTimeout(() => {
        this.pageScrollService.scroll({
          document: this.document,
          scrollTarget: '#contact',
        });
      });
    }
  }
}
