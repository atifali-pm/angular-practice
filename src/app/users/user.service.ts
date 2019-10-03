import {User} from './user';
import {Subject} from "rxjs";

export class UserService {

  userAdded = new Subject<User[]>();

  private users = [
    new User('atif ali', 'aatifaliew@gmail.com'),
    new User('kashif ali', 'kashif@gmail.com'),
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    this.userAdded.next(this.users.slice());
  }
}
