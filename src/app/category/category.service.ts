import {Category} from './category';
import {Subject} from "rxjs";

export class CategoryService {

  categoryAdded = new Subject<Category[]>();
  startedEditing = new Subject<number>();

  private categories = [
    new Category('Test Category', 'Test Description'),
    new Category('Test Category 2', 'Test Description 2'),
  ];

  constructor() {
  }

  getCategories() {
    return this.categories;
  }

  getCategory(index: number) {
    return this.categories[index];
  }

  addCategory(category: Category) {
    this.categories.push(category);
    this.categoryAdded.next(this.categories.slice());
  }
}
