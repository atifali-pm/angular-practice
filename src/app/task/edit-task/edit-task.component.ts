import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;

  editMode = false;
  editItemIndex: number;
  editItem: Task;

  constructor(private tService: TaskService) {
  }

  ngOnInit() {
    this.tService.startEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.tService.getTask(index);
        this.slForm.setValue({
          name: this.editItem.name,
          description: this.editItem.description
        });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.name, value.description);
    if (this.editMode) {
    } else {
      this.tService.addTask(newTask);
    }
    this.editMode = false;
    form.reset();
  }

}
