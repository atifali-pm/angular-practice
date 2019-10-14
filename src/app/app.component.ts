import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category/category.service';
import {Router} from '@angular/router';
import {ProjectService} from './project/project.service';
import {TaskService} from './task/task.service';
import {TagsService} from './tags/tags.service';
import {UserService} from "./users/user.service";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }


  onLoadCategories() {
    this.router.navigate(['/categories']);
  }

  ngOnInit(): void {
    this.authService.autologin();
  }

}
