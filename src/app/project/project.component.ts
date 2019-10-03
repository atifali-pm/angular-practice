import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {Project} from "./project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private pService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.pService.getProjects();
  }

  onEdit(index: number) {
    this.pService.startedEditing.next(index);
  }

  onDelete(index: number){
    this.pService.deleteProject(index);
  }
}
