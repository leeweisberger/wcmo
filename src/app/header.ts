import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wcmo-header',
  templateUrl: './header.html'
})
export class HeaderComponent {

	constructor(private router: Router) {
		this.router = router;
	}

	onHomePage(): boolean {
		return this.router.url === '/' || this.router.url === '/contact';
	}
}
