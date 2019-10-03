import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: User;

  constructor(private uService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.uService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.uService.getUser(index);
      this.slForm.setValue({
        name: this.editItem.name,
        email: this.editItem.email
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.name, value.email);
    if (this.editMode) {
      this.uService.updateUser(this.editItemIndex, newUser);
    } else {
      this.uService.addUser(newUser);
    }
    this.editMode = false;
    form.reset();
  }

}
