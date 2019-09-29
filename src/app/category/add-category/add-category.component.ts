import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  addCategory() {
    const catName = this.nameInputRef.nativeElement.value;
    const catDesc = this.descriptionInputRef.nativeElement.value;
    const newCat = new Category(catName, catDesc);
    this.categoryService.addedCategory(newCat);
  }

}
