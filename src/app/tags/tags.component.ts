import {Component, OnInit} from '@angular/core';
import {TagsService} from "./tags.service";
import {Tag} from "./tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[];

  constructor(private tagService: TagsService) {
  }

  ngOnInit() {
    this.tags = this.tagService.getTags();
  }

  onEdit(id: number) {
    this.tagService.startEditing.next(id);
  }

  onDelete(id: number){
    this.tagService.deleteTag(id);
  }

}
