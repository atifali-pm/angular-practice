import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @ViewChild('f') clForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
//    this.subscription = this.categoryService.addedCategory()
    this.subscription = this.categoryService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.categoryService.getCategory(index);
          this.clForm.setValue({
            name: this.editedItem.name,
            description: this.editedItem.description,
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCategory = new Category(value.name, value.description);
    if (this.editMode) {
      this.categoryService.updateCategory(this.editedItemIndex, newCategory);

    } else {
      this.categoryService.addCategory(newCategory);
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
