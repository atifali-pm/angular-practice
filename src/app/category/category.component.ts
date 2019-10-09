import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: Category[];
  subscription: Subscription;

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.categoryService.categoryChanged.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.categories = this.categoryService.getCategories();
  }

  onEdit(id: number) {
    this.categoryService.startedEditing.next(id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

  onDelete(id: number) {
    this.categoryService.deleteCategory(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
