import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];

  onUserCreated(userData) {
    this.users.push({
      name: userData.name,
      email: userData.email,
    });
  }

}
