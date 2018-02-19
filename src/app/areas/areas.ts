import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'areas',
	templateUrl:'./areas.html'
})
export class AreasComponent {
	areas = ['Real Estate', 'Business Practice', 'Estate Planning, Wills, & Trusts', 'Litigation', 'Financial Services', 'Tax', 'Family Law', 'Alternate Dispute Resolution'];
	constructor(private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

	}

	ngOnInit() {
		PageScrollConfig.defaultDuration = 700;
		const splitUrl = this.router.url.split('/');
		const lastUrl = decodeURI(splitUrl[splitUrl.length - 1]);
		setTimeout(() => { this.scrollTo(lastUrl); }, 0);
	}

	scrollTo(id: string) {
		id = id.replace(/ /g,'');
		const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${id}`);
		this.pageScrollService.start(pageScrollInstance);
	}
}