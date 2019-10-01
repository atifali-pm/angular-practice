import {Component} from '@angular/core';
import {CategoryService} from "./category/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})
export class AppComponent {

  constructor(private router: Router) {
  }


  onLoadCategories() {
    this.router.navigate(['/categories']);
  }

}
