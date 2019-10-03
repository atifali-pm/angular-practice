import {Category} from './category';
import {Subject} from "rxjs";

export class CategoryService {

  categoryAdded = new Subject<Category[]>();
  startedEditing = new Subject<number>();
  categoryChanged = new Subject<Category[]>();

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

  updateCategory(index: number, category: Category) {
    this.categories[index] = category;
    this.categoryChanged.next(this.categories.slice());
  }

  deleteCategory(index: number) {
    this.categories.splice(index , 1);
    this.categoryChanged.next(this.categories.slice());
  }
}
