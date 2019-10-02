import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
//    this.subscription = this.categoryService.addedCategory()
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCategory = new Category(value.name, value.description);
    this.categoryService.addCategory(newCategory);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
