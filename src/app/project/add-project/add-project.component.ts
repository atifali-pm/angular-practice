import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Project} from '../project';
import {ProjectService} from '../project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit, OnDestroy {

  subscription = Subscription

  constructor(private pService: ProjectService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProject = new Project(value.name, value.description);
    this.pService.addProject(newProject);
  }

  ngOnDestroy(): void {
  }

}
