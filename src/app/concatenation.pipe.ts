import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'concatenation'
})
export class ConcatenationPipe implements PipeTransform {

  transform(post: Post, args?: any): any {
    return post.id + post.title;
  }

}