import {Category} from './category';
import {EventEmitter} from "@angular/core";

export class CategoryService {

  categoryAdded = new EventEmitter<Category[]>();

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
    this.categoryAdded.emit(this.getCategories());
  }
}
