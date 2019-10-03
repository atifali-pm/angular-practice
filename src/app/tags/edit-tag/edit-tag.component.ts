import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Tag} from "../tag";
import {TagsService} from "../tags.service";

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {

  constructor(private tagService: TagsService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTag = new Tag(value.name, value.description);
    this.tagService.addTag(newTag);
  }

}
