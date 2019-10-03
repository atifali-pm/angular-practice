import {Task} from './task';
import {Subject} from 'rxjs';

export class TaskService {
  taskAdded = new Subject<Task[]>();
  startEditing = new Subject<number>();

  private tasks = [
    new Task('Task test 1', 'Task test description 1'),
    new Task('Task test 2', 'Task test description 2'),
  ];

  constructor() {
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks[id];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskAdded.next(this.tasks.slice());
  }
}
