import {User} from './user';
import {Subject} from 'rxjs';

export class UserService {

  userAdded = new Subject<User[]>();
  startEditing = new Subject<number>();
  usersChanged = new Subject<User[]>();

  private users = [
    new User('atif ali', 'aatifaliew@gmail.com'),
    new User('kashif ali', 'kashif@gmail.com'),
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users[id];
  }

  addUser(user: User) {
    this.users.push(user);
    this.userAdded.next(this.users.slice());
  }

  updateUser(id: number, user: User) {
    this.users[id] = user;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(id: number){
    this.users.splice(id, 1);
    this.usersChanged.next(this.users.slice());
  }
}
