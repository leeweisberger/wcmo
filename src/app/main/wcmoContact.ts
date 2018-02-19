import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

declare var Materialize:any;

@Component({
  selector: 'wcmoContact',
  templateUrl: './wcmoContact.html'
})
export class WcmoContactComponent {
  public name: string;
  public phone: string;
  public state = 'State';
  public zip: string;
  public email: string;
  public phone_choice = false;
  public email_choice = false;
  public description: string;
  public disclaimer = false;


  public states: State[] = [];
  public lat = 40.942283;
  public lng = -74.269848;

  constructor(public http: Http) {
    this.getStates().subscribe(result =>
      this.states = result);
  }

  getStates(): Observable<State[]> {
    return this.http
      .get('assets/states.json')
      .map(response => response.json());
  }

  submit() {
    if (!this.isFormFilled()) {
      Materialize.toast('Please Fill Out All Fields Marked With *', 4000, "red");
      return;
    }
    if (!this.email.includes('@') || !this.email.includes('.')) {
      return;
    }

    const url = 'https://shrouded-beach-93379.herokuapp.com/sendMailToWcmo'; 
    const body = `Phone: ${this.phone}
State: ${this.state}
Zip: ${this.zip}
Contact by phone: ${this.phone_choice}
Contact by email: ${this.email_choice}
Message: ${this.description}`;
    const postBody = {name: this.name, email: this.email, subject: 'Email from ' + this.name, body}
    this.http.post(url, postBody).subscribe((res: Response) => {
      if (res.status === 200) {
        Materialize.toast('Your Email Was Sent', 4000, "green");
      } else {
        Materialize.toast('Something Went Wrong. Please Try Again', 4000, "red");
      }
    });
  }

  private isFormFilled() {
    return this.name && this.disclaimer && this.description && this.email;
  }
}

interface State {
    name: string;
    abbreviation: string;
}
