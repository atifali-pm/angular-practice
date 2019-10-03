import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onEdit(id: number) {
    this.categoryService.startedEditing.next(id);
  }

  onDelete(id: number){
    this.categoryService.deleteCategory(id);
  }

}
