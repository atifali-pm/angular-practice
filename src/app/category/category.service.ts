import {Category} from './category';
import {Subject} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';
export class CategoryService {

  categoryAdded = new Subject<Category[]>();
  startedEditing = new Subject<number>();
  categoryChanged = new Subject<Category[]>();

  private categories = [
    new Category('first Category', 'first Description')
  ];

  constructor() {
  }

  getCategories() {
    return this.categories.slice();
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

  setCategories(categories: Category[]) {
    this.categories = categories;
    this.categoryChanged.next(this.getCategories());
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
    this.categoryChanged.next(this.categories.slice());
  }
}
