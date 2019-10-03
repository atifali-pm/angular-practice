import {Tag} from './tag';
import {Subject} from 'rxjs';

export class TagsService {

  // @ts-ignore
  tagsAdded = new Subject<Tag[]>();
  tagChanged = new Subject<Tag[]>();
  startEditing = new Subject<number>();

  private tags = [
    new Tag('First tag', 'first tag description'),
    new Tag('Second tag', 'Second tag description'),
  ];

  constructor() {
  }

  getTags() {
    return this.tags;
  }

  getTag(index: number) {
    return this.tags[index];
  }

  addTag(tag: Tag) {
    this.tags.push(tag);
    this.tagsAdded.next(this.tags.slice());
  }

  updateTag(id: number, tag: Tag) {
    this.tags[id] = tag;
    this.tagChanged.next(this.tags.slice());
  }

  deleteTag(id: number) {
    this.tags.splice(id, 1);
    this.tagChanged.next(this.tags.slice());
  }


}
