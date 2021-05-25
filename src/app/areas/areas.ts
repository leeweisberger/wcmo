import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'areas',
	templateUrl: './areas.html'
})
export class AreasComponent implements OnInit {
	areas = ['Real Estate', 'Business Practice', 'Estate Planning, Wills, & Trusts', 'Litigation', 'Financial Services', 'Tax', 'Family Law', 'Alternate Dispute Resolution', 'Elder Law'];
	constructor(private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
	}

	ngOnInit() {
		const splitUrl = this.router.url.split('/');
		const lastUrl = decodeURI(splitUrl[splitUrl.length - 1]);
		setTimeout(() => { this.scrollTo(lastUrl); }, 0);
	}

	scrollTo(id: string) {
		id = id.replace(/ /g, '');
		this.pageScrollService.scroll({
			document: this.document,
			scrollTarget: `#${id}`,
		});
	}
}
