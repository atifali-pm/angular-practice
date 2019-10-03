import {Tag} from './tag';
import {Subject} from 'rxjs';

export class TagsService {

  // @ts-ignore
  tagsAdded = new Subject<Tag[]>();

  private tags = [
    new Tag('First tag', 'first tag description'),
    new Tag('Second tag', 'Second tag description'),
  ];

  constructor() {
  }

  getTags() {
    return this.tags;
  }

  addTag(tag: Tag) {
    this.tags.push(tag);
    this.tagsAdded.next(this.tags.slice());
  }

}
