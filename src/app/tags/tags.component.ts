import {Component, OnInit} from '@angular/core';
import {TagsService} from "./tags.service";
import {Tag} from "./tag";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[];

  constructor(private tagService: TagsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tags = this.tagService.getTags();
  }

  onEdit(id: number) {
    this.tagService.startEditing.next(id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

  onDelete(id: number) {
    this.tagService.deleteTag(id);
  }

}
