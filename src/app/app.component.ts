import {Component} from '@angular/core';
import {CategoryService} from './category/category.service';
import {Router} from '@angular/router';
import {ProjectService} from './project/project.service';
import {TaskService} from './task/task.service';
import {TagsService} from './tags/tags.service';
import {UserService} from "./users/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService, ProjectService, TaskService, TagsService, UserService]
})
export class AppComponent {

  constructor(private router: Router) {
  }


  onLoadCategories() {
    this.router.navigate(['/categories']);
  }

}
