import {Category} from './category';
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class CategoryService {

  categoryAdded = new Subject<Category[]>();

  private categories = [
    new Category('Test Category', 'Test Description'),
    new Category('Test Category 2', 'Test Description 2'),
  ];

  constructor() {
  }

  getCategories() {
    return this.categories;
  }

  addedCategory(category: Category) {
    this.categories.push(category);
    this.categoryAdded.next(this.getCategories());
  }

  addCategory(category: Category) {
    this.categories.push(category);
    this.categoryAdded.next(this.categories.slice());
  }
}
