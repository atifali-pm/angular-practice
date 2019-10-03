import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemindex: number;
  editedItem: Project;

  constructor(private pService: ProjectService) {
  }

  ngOnInit() {
    this.subscription = this.pService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemindex = index;
        this.editedItem = this.pService.getProject(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          description: this.editedItem.description,
        });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProject = new Project(value.name, value.description);
    if (this.editMode) {
      this.pService.updateProject(this.editedItemindex, newProject);
    } else {
      this.pService.addProject(newProject);
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
