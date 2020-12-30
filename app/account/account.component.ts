import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'account',
  template: `
    <section class="jumbotron">
    <h2><img src="{{profile.picture}}" alt="Jumbotron image"/></h2>
    <h1>{{profile.name}}</h1>
    <p>Well done!</p>
    <div class="btn btn-success btn-lg" routerLink="/">Back to Homepage</div>
  </section>
  `
})
export class AccountComponent {
  profile: any;
  responseJson: string;

  constructor(public authService: AuthService, private api: ApiService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
   }
  pingApi() {
    this.api
      .ping$()
      .subscribe(
        (res) => (this.responseJson = JSON.stringify(res, null, 2).trim())
      );
  }

}