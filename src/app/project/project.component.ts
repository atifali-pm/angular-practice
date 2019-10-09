import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {Project} from "./project";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private pService: ProjectService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projects = this.pService.getProjects();
  }

  onEdit(id: number) {
    this.pService.startedEditing.next(id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

  onDelete(index: number) {
    this.pService.deleteProject(index);
  }
}
