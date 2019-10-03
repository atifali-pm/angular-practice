import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private uService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.name, value.email);
    this.uService.addUser(newUser);
  }

}
