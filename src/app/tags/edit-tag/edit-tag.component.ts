import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Tag} from "../tag";
import {TagsService} from "../tags.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Tag;

  constructor(private tagService: TagsService) {
  }

  ngOnInit() {
    this.subscription = this.tagService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.tagService.getTag(index);
      this.slForm.setValue({
        name: this.editItem.name,
        description: this.editItem.description
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTag = new Tag(value.name, value.description);
    if(this.editMode) {
      this.tagService.updateTag(this.editItemIndex, newTag);
    } else {
      this.tagService.addTag(newTag);
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
