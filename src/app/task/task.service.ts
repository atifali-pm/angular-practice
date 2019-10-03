import {Task} from './task';
import {Subject} from 'rxjs';

export class TaskService {
  taskAdded = new Subject<Task[]>();

  private tasks = [
    new Task('Task test 1', 'Task test description 1'),
    new Task('Task test 2', 'Task test description 2'),
  ];

  constructor() {
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskAdded.next(this.tasks.slice());
  }
}
