import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(private tService: TaskService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tasks = this.tService.getTasks();
  }

  onEdit(id: number) {
    this.tService.startEditing.next(id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route});

  }

}
