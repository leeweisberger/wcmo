import { Component, Input } from '@angular/core';

@Component({
	selector: 'lawyers',
	templateUrl:'./lawyers.html'
})
export class LawyersComponent {	
    @Input() public lawyers: String[];
}
