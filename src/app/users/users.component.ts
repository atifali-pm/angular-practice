import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private uService: UserService) {
  }

  ngOnInit() {
    this.users = this.uService.getUsers();
  }

  onEdit(id: number) {
    this.uService.startEditing.next(id);
  }

  onDelete(id: number) {
    this.uService.deleteUser(id);
  }

}
