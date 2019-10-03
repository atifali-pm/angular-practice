import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private tService: TaskService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.name, value.description);
    this.tService.addTask(newTask);
  }

}
