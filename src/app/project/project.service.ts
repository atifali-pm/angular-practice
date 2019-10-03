import {Project} from './project';
import {Subject} from 'rxjs';
import {Injectable} from "@angular/core";


export class ProjectService {
  projectAdded = new Subject<Project[]>();
  startedEditing = new Subject<number>();
  projectChanged = new Subject<Project[]>();

  private projects = [
    new Project('test Project1', 'test project 1 desc',
      {name: 'first Category', description: 'first category description'}),
    new Project('test project 2', 'test project desc 2',
      {name: 'second Category', description: 'second category description'}
    ),
  ];

  constructor() {
  }

  getProjects() {
    return this.projects;
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectAdded.next(this.projects.slice());
  }

  updateProject(index: number, project: Project) {
    this.projects[index] = project;
    this.projectChanged.next(this.projects.slice());
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.projectChanged.next((this.projects.slice()));
  }
}
