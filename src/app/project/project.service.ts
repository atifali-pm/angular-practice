import {Project} from './project';
import {Subject} from 'rxjs';

export class ProjectService {
  projectAdded = new Subject<Project[]>();

  private projects = [
    new Project('test Project1', 'test project 1 desc'),
    new Project('test project 2', 'test project desc 2'),
  ];

  constructor() {
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectAdded.next(this.projects.slice());
  }
}
