import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private uService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.uService.getUsers();
  }

  onEdit(id: number) {
    this.uService.startEditing.next(id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

  onDelete(id: number) {
    this.uService.deleteUser(id);
  }

}
